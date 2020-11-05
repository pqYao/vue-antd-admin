<template>
	<a-card class="quote-price-wrapper">
		<Heading name="报价信息">
      <a-button 
      	v-if="pageType == 1"
      	type="primary" 
      	@click="handleSubmit">
        <i :class="['iconfont', 'icon-baocun']"></i>
        保存
      </a-button>
    </Heading>
		<Descriptions 
			v-if="pageType == 0"
      :list="labelList" 
      :param="formData"> 
    </Descriptions>
		<a-form
			v-else
			:form="form"
      layout="horizontal"
      class="es-form"
      @keydown.native.enter.prevent="handleSubmit">
      <a-row>
      	<a-col :md="8" :sm="24" v-if="isRequiredStr.indexOf('税率') != -1">
      		<a-form-item label="税率(%)" v-bind="BASE.oneItemLayout">
            <a-input
              allowClear
              type="number"
              v-decorator="[
                `taxRate`,
                {
                  validateTrigger: ['blur'],
                  initialValue: formData.taxRate,
                  rules: [{ required: true, validator: validTaxRate }]
                }
              ]"
              placeholder="请输入"
            />
          </a-form-item>
      	</a-col>
      	<a-col :md="8" :sm="24" v-if="isRequiredStr.indexOf('折扣率') != -1">
      		<a-form-item label="折扣率(%)" v-bind="BASE.oneItemLayout">
            <a-input
              allowClear
              type="number"
              v-decorator="[
                `rebateRate`,
                {
                  validateTrigger: ['blur'],
                  initialValue: formData.rebateRate,
                  rules: [{ required: true, validator: validRebateRate }]
                }
              ]"
              placeholder="请输入"
            />
          </a-form-item>
      	</a-col>
        <a-col :md="8" :sm="24" v-if="isRequiredStr.indexOf('含税总价') != -1">
          <a-form-item label="含税总价(元)" v-bind="BASE.oneItemLayout">
            <a-input
              allowClear
              type="number"
              v-decorator="[
                `totalMoney`,
                {
                  validateTrigger: ['blur'],
                  initialValue: formData.totalMoney,
                  rules: [{ required: true, validator: validTotalMoney }]
                }
              ]"
              placeholder="请输入"
            />
          </a-form-item>
        </a-col>
        <a-col :md="8" :sm="24" v-if="isRequiredStr.indexOf('不含税单价') != -1">
          <a-form-item label="不含税单价(元)" v-bind="BASE.oneItemLayout">
            <a-input
              allowClear
              type="number"
              v-decorator="[
                `priceFree`,
                {
                  validateTrigger: ['blur'],
                  initialValue: formData.priceFree,
                  rules: [{ required: true, validator: validPriceFree }]
                }
              ]"
              placeholder="请输入"
            />
          </a-form-item>
        </a-col>
      	<a-col :md="8" :sm="24" v-if="isRequiredStr.indexOf('含税单价') != -1">
      		<a-form-item label="含税单价(元)" v-bind="BASE.oneItemLayout">
            <a-input
              allowClear
              type="number"
              v-decorator="[
                `price`,
                {
                  validateTrigger: ['blur'],
                  initialValue: formData.price,
                  rules: [{ required: true, validator: validPrice }]
                }
              ]"
              placeholder="请输入"
            />
          </a-form-item>
      	</a-col>
        <a-col :md="8" :sm="24" v-if="isRequiredStr.indexOf('不含税总价') != -1">
          <a-form-item label="不含税总价(元)" v-bind="BASE.oneItemLayout">
            <a-input
              allowClear
              type="number"
              v-decorator="[
                `totalMoneyFree`,
                {
                  validateTrigger: ['blur'],
                  initialValue: formData.totalMoneyFree,
                  rules: [{ required: true, validator: validTotalMoneyFree }]
                }
              ]"
              placeholder="请输入"
            />
          </a-form-item>
        </a-col>
        <a-col :md="8" :sm="24" v-if="isRequiredStr.indexOf('税额') != -1">
          <a-form-item label="税额(元)" v-bind="BASE.oneItemLayout">
            <a-input
              allowClear
              type="number"
              v-decorator="[
                `taxMoney`,
                {
                  validateTrigger: ['blur'],
                  initialValue: formData.taxMoney,
                  rules: [{ required: true, validator: validTaxMoney }]
                }
              ]"
              placeholder="请输入"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <!-- <a-row>
      	<a-col :md="8" :sm="24">
      		<a-form-item label="未含税总价(元)" v-bind="BASE.oneItemLayout">
            <a-input
              allowClear
              type="number"
              v-decorator="[
                `totalMoneyFree`,
                {
                  validateTrigger: ['blur'],
                  initialValue: formData.totalMoneyFree,
                  rules: [{ required: true, validator: validTotalMoneyFree }]
                }
              ]"
              placeholder="请输入"
            />
          </a-form-item>
      	</a-col>
      	<a-col :md="8" :sm="24">
      		<a-form-item label="税额(元)" v-bind="BASE.oneItemLayout">
            <a-input
              allowClear
              type="number"
              v-decorator="[
                `taxMoney`,
                {
                  validateTrigger: ['blur'],
                  initialValue: formData.taxMoney,
                  rules: [{ required: true, validator: validTaxMoney }]
                }
              ]"
              placeholder="请输入"
            />
          </a-form-item>
      	</a-col>
      </a-row>		 -->
    </a-form>
	</a-card>
</template>

<script>
  import { mapGetters } from "vuex";
	import { saveAnswerDetailInfo } from "@/services/response";
	export default {
		name: "quote-price",
		components: {
			Heading: () => import('@/components/heading/Heading'),
			Descriptions: () => import('@/components/descriptions/Description'),
		},
		props: {
			//0 详情界面，1 编辑界面
			pageType: {
				type: [String, Number],
				default: 0
			},
      baseData: {
        type: Object,
        default() {
          return {}
        }
      }
		},
		data() {
			return {
        isRequiredStr: '',
				form: this.$form.createForm(this),
				formData: {},
				labelList: [
	        {
	          label: "税率(%)",
	          key: "taxRate",
	          show: false,
            judgeKey: "税率"
	        },
	        {
	          label: "折扣率(%)",
	          key: "rebateRate",
	          show: false,
            judgeKey: "折扣率"
	        },
          {
            label: "含税单价(元)",
            key: "price",
            show: false,
            judgeKey: "含税单价"
          },
          {
            label: "不含税单价(元)",
            key: "priceFree",
            show: false,
            judgeKey: "不含税单价"
          },
	        {
	          label: "含税总价(元)",
	          key: "totalMoney",
	          show: false,
            judgeKey: "含税总价"
	        },
	        {
	          label: "不含税总价(元)",
	          key: "totalMoneyFree",
	          show: false,
            judgeKey: "不含税总价"
	        },
	        {
	          label: "税额(元)",
	          key: "taxMoney",
	          show: false,
            judgeKey: "税额"
	        }
	      ]
			}
		},
		computed: {
      ...mapGetters("account", ["dictionary", "user"]),
			projectId() {
				return this.$route.params.id
			}
		},
    watch: {
      baseData() {
        this.fnInit();
      }
    },
    created() {
      this.fnInit();
    },
		methods: {
      fnInit() {
        this.formData = Object.assign({}, this.baseData);
        this.isRequiredStr = this.dictionary.offerWay[this.formData.offerWay] || '';
        this.labelList.forEach((ele) => {
          if (this.isRequiredStr.indexOf(ele.judgeKey) != -1) {
            ele.show = true;
          }
        })
        console.log("this.formData", this.formData);
      },
			handleSubmit() {
				this.form.validateFieldsAndScroll(this.BASE.formScrollOptions, (err, values) => {
					if (!err) {
            let data = {};
						for (let i in values) {
	            data[i] = values[i];
	          }
            this.formData = Object.assign(this.formData, data);
						saveAnswerDetailInfo(this.formData).then(res => {
		          const resData = res.data || {};
		          if (resData.errCode == "0000") {
		            this.$message.success(resData.responseResult, 3);
		            //this.fnGetData();
		          } else {
		            this.$error({
		              title: "错误提示",
		              content: this.BASE.handleErrorMsg(resData)
		            });
		          }
		        });
					}
				})
			},
      // 验证金额
      validTaxRate(rule, value, callback) {
        if (!this.BASE.CheckIsNullOrEmpty(value)) {
          callback("请输入税率");
          return;
        }
        let reg = this.BASE.reg.mountReg;
        if (!reg.test(value)) {
          callback("请输入正确的数字");
        }
        callback();
      },
      validPriceFree(rule, value, callback) {
        if (!this.BASE.CheckIsNullOrEmpty(value)) {
          callback("请输入不含税单价");
          return;
        }
        let reg = this.BASE.reg.mountReg;
        if (!reg.test(value)) {
          callback("请输入正确的金额");
        }
        callback();
      },
      validPrice(rule, value, callback) {
        if (!this.BASE.CheckIsNullOrEmpty(value)) {
          callback("请输入含税单价");
          return;
        }
        let reg = this.BASE.reg.mountReg;
        if (!reg.test(value)) {
          callback("请输入正确的金额");
        }
        callback();
      },
      validRebateRate(rule, value, callback) {
        if (!this.BASE.CheckIsNullOrEmpty(value)) {
          callback("请输入折扣率");
          return;
        }
        let reg = this.BASE.reg.mountReg;
        if (!reg.test(value)) {
          callback("请输入正确的数字");
        }
        callback();
      },
      validTotalMoney(rule, value, callback) {
        if (!this.BASE.CheckIsNullOrEmpty(value)) {
          callback("请输入含税总价");
          return;
        }
        let reg = this.BASE.reg.moneyReg;
        if (!reg.test(value)) {
          callback("请输入正确的金额");
        }
        callback();
      },
      validTotalMoneyFree(rule, value, callback) {
        if (!this.BASE.CheckIsNullOrEmpty(value)) {
          callback("请输入未含税总价");
          return;
        }
        let reg = this.BASE.reg.moneyReg;
        if (!reg.test(value)) {
          callback("请输入正确的金额");
        }
        callback();
      },
      validTaxMoney(rule, value, callback) {
        if (!this.BASE.CheckIsNullOrEmpty(value)) {
          callback("请输入税额");
          return;
        }
        let reg = this.BASE.reg.moneyReg;
        if (!reg.test(value)) {
          callback("请输入正确的金额");
        }
        callback();
      },
			onSearch(type) {
				this[`${type}Visible`] = true;
			},
			handleSelectOk(key) {
				let data = this.$refs[key].getRes();
				console.log(data);
				this[`${key}Visible`] = false;
			}
		}
	}
</script>