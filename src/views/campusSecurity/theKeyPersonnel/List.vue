<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form v-bind="formLayout">
          <a-row>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="公民身份证号码">
                <a-input
                  v-model="queryParam.idCard"
                  placeholder
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="姓名">
                <a-input
                  v-model="queryParam.fullName"
                  placeholder
                />
              </a-form-item>
            </a-col>
            <template v-if="advanced">
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="曾用名">
                  <a-input-number
                    v-model="queryParam.nameUsedBefore"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="性别">
                  <a-select
                    v-model="queryParam.gender"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">男</a-select-option>
                    <a-select-option value="1">女</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="出生日期">
                  <a-date-picker
                    v-model="queryParam.birthday"
                    style="width: 100%"
                    placeholder="请输入出生日期"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="民族">
                  <a-select
                    v-model="queryParam.nation"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">汉</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="籍贯(省市区)">
                  <a-cascader
                    :options="options"
                    placeholder="请选择"
                    @change="onChange($event,'NATIVE')"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="籍贯">
                  <a-input
                    v-model="queryParam.nativePlace"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="婚姻状况">
                  <a-select
                    placeholder="请选择"
                    v-model="queryParam.marital"
                    default-value="0"
                  >
                    <a-select-option value="0">已婚</a-select-option>
                    <a-select-option value="1">未婚</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="政治面貌">
                  <a-select
                    v-model="queryParam.politicalOutlook"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">党员</a-select-option>
                    <a-select-option value="1">共青团员</a-select-option>
                    <a-select-option value="3">群众</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="学历">
                  <a-select
                    v-model="queryParam.education"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">高中</a-select-option>
                    <a-select-option value="1">中专</a-select-option>
                    <a-select-option value="2">大专</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="宗教信仰">
                  <a-select
                    v-model="queryParam.religiousBelife"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">无</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="职业类别">
                  <a-select
                    v-model="queryParam.occupationCatgory"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">无</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="职业">
                  <a-select
                    v-model="queryParam.occupation"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">无</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="服务处所">
                  <a-input-number
                    v-model="queryParam.servicePlace"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="联系类型">
                  <a-select
                    v-model="queryParam.contactType"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">无</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="联系方式">
                  <a-input-number
                    v-model="queryParam.contactInformation"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="户籍地(省市区)">
                  <a-cascader
                    :options="options"
                    placeholder="请选择"
                    @change="onChange($event,'PLACE')"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="户籍地">
                  <a-input
                    v-model="queryParam.placeDomicile"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="户籍地详址">
                  <a-input-number
                    v-model="queryParam.placeDomicileAddress"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="现住地(省市区)">
                  <a-cascader
                    :options="options"
                    placeholder="请选择"
                    @change="onChange($event,'CURRENT')"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="现住地">
                  <a-input
                    v-model="queryParam.currentResidence"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="现住地详址">
                  <a-input-number
                    v-model="queryParam.currentResidenceAddress"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="危害程度">
                  <a-select
                    v-model="queryParam.harmDegree"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">无</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="是否关注">
                  <a-select
                    v-model="queryParam.concerned"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">无</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </template>
            <a-col
              :md="!advanced && 8 || 24"
              :sm="24"
            >
              <span
                class="table-page-search-submitButtons"
                :style="advanced && { float: 'right', overflow: 'hidden' } || {} "
              >
                <a-button
                  type="primary"
                  @click="$refs.table.refresh(true)"
                >查询</a-button>
                <a-button
                  style="margin-left: 8px"
                  @click="() => this.queryParam = {}"
                >重置</a-button>
                <a
                  @click="toggleAdvanced"
                  style="margin-left: 8px"
                >
                  {{ advanced ? '收起' : '展开' }}
                  <a-icon :type="advanced ? 'up' : 'down'" />
                </a>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <div class="table-operator">
        <a-button
          type="primary"
          icon="plus"
          @click="handleAdd"
        >新建</a-button>
        <a-dropdown
          v-action:edit
          v-if="selectedRowKeys.length > 0"
        >
          <a-menu slot="overlay">
            <a-menu-item key="1">
              <a-icon type="delete" />删除
            </a-menu-item>
            <!-- lock | unlock -->
            <a-menu-item key="2">
              <a-icon type="lock" />锁定
            </a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px">
            批量操作
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </div>

      <s-table
        ref="table"
        size="default"
        rowKey="key"
        :columns="columns"
        :data="loadData"
        :alert="true"
        :rowSelection="rowSelection"
        showPagination="auto"
        :scroll="{ x:true}"
      >

        <!-- 序号 -->
        <span
          slot="serial"
          slot-scope="text, record, index"
        >{{ index + 1 }}</span>

        <!-- 身份证号为了防止超出 限制了显示的长度 -->
        <span
          slot="idCard"
          slot-scope="text, record"
        >
          <ellipsis
            :length="7"
            tooltip
          >
            <!-- {{ text}} -->
            {{record.governRealPopulation.idCard}}
            <!-- {{index}} -->
          </ellipsis>
        </span>

        <!-- 姓名的自定义 -->
        <span
          slot="fullName"
          slot-scope="text,record"
        >
          <ellipsis
            :length="7"
            tooltip
          >{{ record.governRealPopulation.fullName }}</ellipsis>
        </span>

        <!-- 曾用名的自定义 -->
        <span
          slot="nameUsedBefore"
          slot-scope="text,record"
        >
          <ellipsis
            :length="7"
            tooltip
          >{{ record.governRealPopulation.nameUsedBefore }}</ellipsis>
        </span>

        <!-- 性别 -->
        <span
          slot="gender"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.gender }}
        </span>
        <!-- 出生日期 -->

        <span
          slot="birthday"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.birthday }}
        </span>

        <!-- 民族 -->
        <span
          slot="nation"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.nation }}
        </span>

        <!-- 籍贯(省市区) -->
        <span
          slot="nativePlaceCity"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.nativePlaceCity }}
        </span>
        <span
          slot="nativePlaceRegion"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.nativePlaceRegion }}
        </span>
        <span
          slot="nativePlace"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.nativePlace }}
        </span>

        <!-- 婚姻状况 -->
        <span
          slot="marital"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.marital }}
        </span>

        <!-- 政治面貌 -->
        <span
          slot="politicalOutlook"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.politicalOutlook }}
        </span>

        <!-- 学历 -->
        <span
          slot="education"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.education }}
        </span>

        <!-- 宗教信仰 -->
        <span
          slot="religiousBelife"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.religiousBelife }}
        </span>

        <!-- 职业类别 -->
        <span
          slot="occupationCatgory"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.occupationCatgory }}
        </span>

        <!-- 职业 -->
        <span
          slot="occupation"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.occupation }}
        </span>

        <!-- 服务处所 -->
        <span
          slot="servicePlace"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.servicePlace }}
        </span>

        <!-- 联系类型 -->
        <span
          slot="contactType"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.contactType }}
        </span>
        <!-- 联系方式的自定义 -->
        <span
          slot="contactInformation"
          slot-scope="text"
        >
          <ellipsis
            :length="10"
            tooltip
          >{{ text }}</ellipsis>
        </span>

        <!-- 户籍地(省市区) -->
        <span
          slot="placeDomicileProvince"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.placeDomicileProvince }}
        </span>
        <span
          slot="placeDomicileCity"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.placeDomicileCity }}
        </span>
        <span
          slot="placeDomicileRegion"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.placeDomicileRegion }}
        </span>

        <!-- 户籍地 户籍地详细地址  现住址 现住详细地址 -->
        <span
          slot="placeDomicile"
          slot-scope="text,record"
        >
          <ellipsis
            :length="10"
            tooltip
          >{{ record.governRealPopulation.placeDomicile }}</ellipsis>
        </span>

        <span
          slot="placeDomicileAddress"
          slot-scope="text,record"
        >
          <ellipsis
            :length="10"
            tooltip
          >{{ record.governRealPopulation.placeDomicileAddress }}</ellipsis>
        </span>
        <!-- 现住址(省市区) -->
        <span
          slot="currentResidenceProvince"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.currentResidenceProvince }}
        </span>
        <span
          slot="currentResidenceCity"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.currentResidenceCity }}
        </span>
        <span
          slot="currentResidenceRegion"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.currentResidenceRegion }}
        </span>

        <span
          slot="currentResidence"
          slot-scope="text"
        >
          <ellipsis
            :length="10"
            tooltip
          >{{ text }}</ellipsis>
        </span>

        <span
          slot="currentResidenceAddress"
          slot-scope="text"
        >
          <ellipsis
            :length="10"
            tooltip
          >{{ text }}</ellipsis>
        </span>

        <!-- 以后可能会有修改和显示的需求 -->
        <span
          slot="action"
          slot-scope="text, record"
        >
          <template>
            <a @click="handleEdit(record)">编辑</a>
            <a-divider type="vertical" />
            <a @click="handleSub(record)">查看</a>
            <a-divider type="vertical" />
            <a @click="handleDel(record)">删除</a>
          </template>
        </span>
      </s-table>

      <create-form
        ref="createModal"
        :visible="visible"
        :loading="confirmLoading"
        :model="mdl"
        @changeModel="changeModel"
        :openType="openType"
        @changeOpenType="changeType"
        @cancel="handleCancel"
        @ok="handleOk"
      />
      <step-by-step-modal
        ref="modal"
        @ok="handleOk"
      />
    </a-card>
    <a-drawer
      title="学校周边重点人员查询"
      :width="920"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form v-bind="formLayout">
        <a-row>
          <a-col
            :md="12"
            :sm="12"
          >
            <a-form-item label="公民身份证号码">
              <a-input
                v-model="queryParam.idCard"
                placeholder
              />
            </a-form-item>
          </a-col>
          <a-col
            :md="12"
            :sm="12"
          >
            <a-form-item label="姓名">
              <a-input
                v-model="queryParam.fullName"
                placeholder
              />
            </a-form-item>
          </a-col>
          <template v-if="advanced">
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="曾用名">
                <a-input-number
                  v-model="queryParam.nameUsedBefore"
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="性别">
                <a-select
                  v-model="queryParam.gender"
                  placeholder="请选择"
                  default-value="0"
                >
                  <a-select-option value="0">男</a-select-option>
                  <a-select-option value="1">女</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="出生日期">
                <a-date-picker
                  v-model="queryParam.birthday"
                  style="width: 100%"
                  placeholder="请输入出生日期"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="民族">
                <a-select
                  v-model="queryParam.nation"
                  placeholder="请选择"
                  default-value="0"
                >
                  <a-select-option value="0">汉</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="籍贯(省市区)">
                <a-cascader
                  :options="options"
                  placeholder="请选择"
                  @change="onChange($event,'NATIVE')"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="籍贯">
                <a-input
                  v-model="queryParam.nativePlace"
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="婚姻状况">
                <a-select
                  placeholder="请选择"
                  v-model="queryParam.marital"
                  default-value="0"
                >
                  <a-select-option value="0">已婚</a-select-option>
                  <a-select-option value="1">未婚</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="政治面貌">
                <a-select
                  v-model="queryParam.politicalOutlook"
                  placeholder="请选择"
                  default-value="0"
                >
                  <a-select-option value="0">党员</a-select-option>
                  <a-select-option value="1">共青团员</a-select-option>
                  <a-select-option value="3">群众</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="学历">
                <a-select
                  v-model="queryParam.education"
                  placeholder="请选择"
                  default-value="0"
                >
                  <a-select-option value="0">高中</a-select-option>
                  <a-select-option value="1">中专</a-select-option>
                  <a-select-option value="2">大专</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="宗教信仰">
                <a-select
                  v-model="queryParam.religiousBelife"
                  placeholder="请选择"
                  default-value="0"
                >
                  <a-select-option value="0">无</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="职业类别">
                <a-select
                  v-model="queryParam.occupationCatgory"
                  placeholder="请选择"
                  default-value="0"
                >
                  <a-select-option value="0">无</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="职业">
                <a-select
                  v-model="queryParam.occupation"
                  placeholder="请选择"
                  default-value="0"
                >
                  <a-select-option value="0">无</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="服务处所">
                <a-input-number
                  v-model="queryParam.servicePlace"
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="联系类型">
                <a-select
                  v-model="queryParam.contactType"
                  placeholder="请选择"
                  default-value="0"
                >
                  <a-select-option value="0">无</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="联系方式">
                <a-input-number
                  v-model="queryParam.contactInformation"
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="户籍地(省市区)">
                <a-cascader
                  :options="options"
                  placeholder="请选择"
                  @change="onChange($event,'PLACE')"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="户籍地">
                <a-input
                  v-model="queryParam.placeDomicile"
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="户籍地详址">
                <a-input-number
                  v-model="queryParam.placeDomicileAddress"
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="现住地(省市区)">
                <a-cascader
                  :options="options"
                  placeholder="请选择"
                  @change="onChange($event,'CURRENT')"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="现住地">
                <a-input
                  v-model="queryParam.currentResidence"
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="现住地详址">
                <a-input-number
                  v-model="queryParam.currentResidenceAddress"
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="危害程度">
                <a-select
                  v-model="queryParam.harmDegree"
                  placeholder="请选择"
                  default-value="0"
                >
                  <a-select-option value="0">无</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="12"
            >
              <a-form-item label="是否关注">
                <a-select
                  v-model="queryParam.concerned"
                  placeholder="请选择"
                  default-value="0"
                >
                  <a-select-option value="0">无</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>
          <a-col
            :md="!advanced && 8 || 24"
            :sm="24"
          >
              <span
                class="table-page-search-submitButtons"
                :style="advanced && { float: 'right', overflow: 'hidden' } || {} "
              >
                <a-button
                  type="primary"
                  @click="$refs.table.refresh(true)"
                >查询</a-button>
                <a-button
                  style="margin-left: 8px"
                  @click="() => this.queryParam = {}"
                >重置</a-button>
                <a
                  @click="toggleAdvanced"
                  style="margin-left: 8px"
                >
                  {{ advanced ? '收起' : '展开' }}
                  <a-icon :type="advanced ? 'up' : 'down'" />
                </a>
              </span>
          </a-col>
        </a-row>
      </a-form>
    </a-drawer>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getRoleList } from '@/api/manage'
import { getGovernKeyAroundSchool } from '@/api/campusSecurity'

import StepByStepModal from './modules/StepByStepModal'
import CreateForm from './modules/CreateForm'

const columns = [
  {
    title: '#',
    scopedSlots: { customRender: 'serial' },
    fixed: 'left'
  },
  {
    title: '公民身份证号',
    dataIndex: 'idCard',
    width: '100',
    scopedSlots: { customRender: 'idCard' }
  },
  {
    title: '姓名',
    dataIndex: 'fullName',
    width: 100,
    scopedSlots: { customRender: 'fullName' }
  },
  {
    title: '曾用名',
    dataIndex: 'nameUsedBefore',
    width: 100,
    scopedSlots: { customRender: 'nameUsedBefore' }
  },
  {
    title: '性别',
    dataIndex: 'gender',
    scopedSlots: { customRender: 'gender' }
  },
  {
    title: '出生日期',
    dataIndex: 'birthday',
    sorter: true,
    scopedSlots: { customRender: 'birthday' }
  },
  {
    title: '民族',
    dataIndex: 'nation',
    // width: '150px',
    scopedSlots: { customRender: 'action' }
  },
  {
    title: '籍贯(省)',
    dataIndex: 'nativePlaceProvince',
    scopedSlots: { customRender: 'nativePlaceProvince' }
  },
  {
    title: '籍贯(市)',
    dataIndex: 'nativePlaceCity',
    scopedSlots: { customRender: 'nativePlaceCity' }
  },
  {
    title: '籍贯(区)',
    dataIndex: 'nativePlaceRegion',
    scopedSlots: { customRender: 'nativePlaceRegion' }
  },
  {
    title: '籍贯',
    dataIndex: 'nativePlace',
    scopedSlots: { customRender: 'nativePlace' }
  },
  {
    title: '婚姻状况',
    dataIndex: 'marital',
    scopedSlots: { customRender: 'marital' }
  },
  {
    title: '政治面貌',
    dataIndex: 'politicalOutlook',
    scopedSlots: { customRender: 'politicalOutlook' }
  },
  {
    title: '学历',
    dataIndex: 'education',
    scopedSlots: { customRender: 'education' }

  },
  {
    title: '宗教信仰',
    dataIndex: 'religiousBelife',
    scopedSlots: { customRender: 'religiousBelife' }
  },
  {
    title: '职业类别',
    dataIndex: 'occupationCatgory',
    scopedSlots: { customRender: 'occupationCatgory' }
  },
  {
    title: '职业',
    dataIndex: 'occupation',
    scopedSlots: { customRender: 'occupation' }
  },
  {
    title: '服务处所',
    dataIndex: 'servicePlace',
    scopedSlots: { customRender: 'servicePlace' }
  },
  {
    title: '联系类型',
    dataIndex: 'contactType',
    scopedSlots: { customRender: 'contactType' }
  },
  {
    title: '联系方式',
    dataIndex: 'contactInformation',
    scopedSlots: { customRender: 'contactInformation' }
  },
  {
    title: '户籍地(省)',
    dataIndex: 'placeDomicileProvince',
    scopedSlots: { customRender: 'placeDomicileProvince' }
  },
  {
    title: '户籍地(市)',
    dataIndex: 'placeDomicileCity',
    scopedSlots: { customRender: 'placeDomicileCity' }
  },
  {
    title: '户籍地(区)',
    dataIndex: 'placeDomicileRegion',
    scopedSlots: { customRender: 'placeDomicileRegion' }
  },
  {
    title: '户籍地',
    dataIndex: 'placeDomicile',
    scopedSlots: { customRender: 'placeDomicile' }
  },
  {
    title: '户籍门地详址',
    dataIndex: 'placeDomicileAddress',
    scopedSlots: { customRender: 'placeDomicileAddress' }
  },
  {
    title: '现住址',
    dataIndex: 'currentResidence',
    scopedSlots: { customRender: 'currentResidence' }
  },
  {
    title: '现住址(省)',
    dataIndex: 'currentResidenceProvince',
    scopedSlots: { customRender: 'currentResidenceProvince' }
  },
  {
    title: '现住址(市)',
    dataIndex: 'currentResidenceCity',
    scopedSlots: { customRender: 'currentResidenceCity' }
  },
  {
    title: '现住址(区)',
    dataIndex: 'currentResidenceRegion',
    scopedSlots: { customRender: 'currentResidenceRegion' }
  },
  {
    title: '现住地详址',
    dataIndex: 'currentResidenceAddress',
    scopedSlots: { customRender: 'currentResidenceAddress' }
  },
  {
    title: '危害程度',
    dataIndex: 'harmDegree',
    scopedSlots: { customRender: 'harmDegree' }
  },
  {
    title: '是否关注',
    dataIndex: 'concerned',
    scopedSlots: { customRender: 'concerned' }
  },
  {
    title: '操作',
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' },
    fixed: 'right'
  }
]

const statusMap = {
  0: {
    status: 'default',
    text: '关闭'
  },
  1: {
    status: 'processing',
    text: '运行中'
  },
  2: {
    status: 'success',
    text: '已上线'
  },
  3: {
    status: 'error',
    text: '异常'
  }
}

export default {
  name: 'TableList',
  components: {
    STable,
    Ellipsis,
    CreateForm,
    StepByStepModal
  },
  data () {
    this.columns = columns
    this.formLayout = {
      labelCol: {
        xs: { span: 1 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 2 },
        sm: { span: 15 }
      }
    }
    return {
      // 弹出框的打开属性  0：新增 1： 编辑   2：修改
      openType: 0,
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 籍贯的三级联动列表
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake'
                }
              ]
            }
          ]
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men'
                }
              ]
            }
          ]
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: (parameter) => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        // var sendDate = new FormData()
        // sendDate.append('parentCode', 120000000000)
        console.log('loadData request parameters:', requestParameters)
        return getGovernKeyAroundSchool(requestParameters).then((res) => {
          return res.result
        })
      },
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  filters: {
    statusFilter (type) {
      return statusMap[type].text
    },
    statusTypeFilter (type) {
      return statusMap[type].status
    }
  },
  created () {
    // this.getAdr()
    getRoleList({ t: new Date() })
  },
  computed: {
    rowSelection () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
  },
  methods: {
    onClose () {
      this.visible = false
    },
    // 接收子组件的值 更改openType
    changeType (type) {
      console.log(type)
      this.openType = type
    },
    // 当子组件查找到对应的档案管理的时候修改父级的mdl
    changeModel (obj) {
      this.mdl = obj
    },
    // 籍贯更改的时候
    onChange (e, type) {
      // console.log(e, type)
      if (type === 'NATIVE') {
        this.queryParam.nativePlaceProvince = e[0]
        this.queryParam.nativePlaceCity = e[1]
        this.queryParam.nativePlaceRegion = e[2]
        console.log(this.queryParam)
      } else if (type === 'PLACE') {
        this.queryParam.placeDomicileProvince = e[0]
        this.queryParam.placeDomicileCity = e[1]
        this.queryParam.placeDomicileRegion = e[2]
      } else if (type === 'CURRENT') {
        this.queryParam.currentResidenceProvince = e[0]
        this.queryParam.currentResidenceCity = e[1]
        this.queryParam.currentResidenceRegion = e[2]
      }
    },
    handleAdd () {
      this.mdl = null
      this.openType = 0
      this.visible = true
    },
    handleEdit (record) {
      this.visible = true
      this.openType = 1
      this.mdl = { ...record }
    },
    handleOk () {
      const form = this.$refs.createModal.form
      this.confirmLoading = true
      form.validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
          if (values.id > 0) {
            // 修改 e.g.
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then((res) => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('修改成功')
            })
          } else {
            // 新增
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then((res) => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('新增成功')
            })
          }
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel () {
      this.visible = false

      const form = this.$refs.createModal.form
      form.resetFields() // 清理表单数据（可不做）
    },
    handleSub (record) {
      this.visible = true
      this.openType = 2
      // if (record.status !== 0) {
      //   this.$message.info(`${record.no} 订阅成功`)
      // } else {
      //   this.$message.error(`${record.no} 订阅失败，规则已关闭`)
      // }
    },
    handleDel (record) {
      //  执行删除的操作
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
      this.visible = true
    },
    resetSearchForm () {
      this.queryParam = {
        date: moment(new Date())
      }
    }
  }
}
</script>
