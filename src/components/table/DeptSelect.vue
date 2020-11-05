<template>
  <a-card>
    <Heading name="组织机构"></Heading>
    <a-input-search
      style="margin-top:8px"
      v-model="searchStr"
      placeholder="输入搜选项"
      @search="onSearch"
    ></a-input-search>
    <!-- selectedKeys是选中项key的集合，expandedKeys是展开项key的集合 -->
    <a-tree
      show-line
      v-model="checkedKeys"
      :treeData="treeData"
      :selectedKeys="selectedKeys"
      :expandedKeys="expandedKeys"
      @expand="onExpand"
      :autoExpandParent="autoExpandParent"
      @select="onSelect"
    >
      <template slot="title" slot-scope="{ title }">
        <span
          v-html="
            title.replace(
              new RegExp(searchValue, 'g'),
              '<span style=color:#f50>' + searchValue + '</span>'
            )
          "
        ></span>
      </template>
    </a-tree>
  </a-card>
</template>

<script>
import Heading from "@/components/heading/Heading";
import { selectDeptTree } from "@/services/basic";

export default {
  data() {
    return {
      expandedKeys: [],
      backupsExpandedKeys: [],
      autoExpandParent: false,
      selectedKeyName: "",
      checkedKeys: [],
      selectedKeys: [],
      searchValue: "",
      treeData: [],
      searchStr: ""
    };
  },
  components: { Heading },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.findTree();
    },
    findTree() {
      selectDeptTree().then(res => {
        const resData = res.data;
        if (resData.errCode == "0000") {
          const { responseResult } = resData;
          this.treeData = responseResult;
          this.treeData.forEach(item => {
            if (item.children.length > 0) {
              item.selectable = false;
              // 即：this.digui(item);在这地方添加的
              item.children.forEach(items => {
                // 下面的就是执行递归的方法，因为我是从第二层才开始需要往下挖的，所以这里多了个forEach,如果从第一层起，从item就好了，即：this.digui(item);在上面添加
                this.recursive(items); // 这里是源头，把一个对象开始递归，开始循环
                // 如果想看完整数据，那么是在这里打印数据哦
                // console.log(items, "看我查看完整的数据哦");
                // 因为上一步递归时，就已经把循环children的动作做完了，这里是验收递归方法的地方。
              });
            }
          });
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    },
    recursive(item) {
      // 一层一层往下面执行，循环，直到不满足情况的条件下，会自动跳出这个递归方法，然后又到上面方法的源头处，开始执行下一个对象。。。
      if (item.children.length > 0) {
        item.selectable = false;
        // 因为三级联动的数据格式是value和label,所以需要自己手动添加，没有的忽略。
        item.children.forEach(ff => {
          // 这里就是判断他的children下面还有没有值，有的话我就要往下挖，就又开始自己调用自己了
          this.recursive(ff);
        });
      }
    },
    onSearch() {
      var vm = this;
      //添加这行代码是为了只点击搜索才触发
      vm.searchValue = vm.searchStr;
      //如果搜索值为空，则不展开任何项，expandedKeys置为空
      //如果搜索值不位空，则expandedKeys的值要为搜索值的父亲及其所有祖先
      if (vm.searchValue === "") {
        vm.expandedKeys = [];
      } else {
        //首先将展开项与展开项副本置为空
        vm.expandedKeys = [];
        vm.backupsExpandedKeys = [];
        //获取所有存在searchValue的节点
        let candidateKeysList = vm.getkeyList(vm.searchValue, vm.treeData, []);
        //遍历满足条件的所有节点
        candidateKeysList.map(item => {
          //获取每个节点的母亲节点
          var key = vm.getParentKey(item, vm.treeData);
          //当item是最高一级，父key为undefined，将不放入到数组中
          //如果母亲已存在于数组中，也不放入到数组中
          if (key && !vm.backupsExpandedKeys.some(item => item === key))
            vm.backupsExpandedKeys.push(key);
        });
        let length = this.backupsExpandedKeys.length;
        for (let i = 0; i < length; i++) {
          vm.getAllParentKey(vm.backupsExpandedKeys[i], vm.treeData);
        }
        vm.expandedKeys = vm.backupsExpandedKeys.slice();
      }
    },
    //获取节点中含有value的所有key集合
    getkeyList(value, tree, keyList) {
      //遍历所有同一级的树
      for (let i = 0; i < tree.length; i++) {
        let node = tree[i];
        //如果该节点存在value值则push
        if (node.title.indexOf(value) > -1) {
          keyList.push(node.key);
        }
        //如果拥有孩子继续遍历
        if (node.children) {
          this.getkeyList(value, node.children, keyList);
        }
      }
      //因为是引用类型，所有每次递归操作的都是同一个数组
      return keyList;
    },
    //该递归主要用于获取key的父亲节点的key值
    getParentKey(key, tree) {
      let parentKey, temp;
      //遍历同级节点
      for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node.children) {
          //如果该节点的孩子中存在该key值，则该节点就是我们要找的父亲节点
          //如果不存在，继续遍历其子节点
          if (node.children.some(item => item.key === key)) {
            parentKey = node.key;
          } else if ((temp = this.getParentKey(key, node.children))) {
            //parentKey = this.getParentKey(key,node.children)
            //改进，避免二次遍历
            parentKey = temp;
          }
        }
      }
      return parentKey;
    },
    //获取该节点的所有祖先节点
    getAllParentKey(key, tree) {
      var parentKey;
      if (key) {
        //获得父亲节点
        parentKey = this.getParentKey(key, tree);
        if (parentKey) {
          //如果父亲节点存在，判断是否已经存在于展开列表里，不存在就进行push
          if (!this.backupsExpandedKeys.some(item => item === parentKey)) {
            this.backupsExpandedKeys.push(parentKey);
          }
          //继续向上查找祖先节点
          this.getAllParentKey(parentKey, tree);
        }
      }
    },
    onExpand(expandedKeys) {
      //用户点击展开时，取消自动展开效果
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onSelect(selectedKeys, info) {
      this.selectedKeys = selectedKeys;
      this.selectedKeyName = info.selectedNodes[0].data.props.dataRef.title;
    },
    getRes() {
      return {
        key: this.selectedKeys[0],
        name: this.selectedKeyName
      };
    }
  }
};
</script>
