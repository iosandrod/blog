import {
	BeforeInsert,
	Column,
	ColumnType,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryColumn,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';
@Entity({ name: 't_sdorder' }) //数据表的名字
export class t_SdOrderEntity extends BaseEntity {
	columnArr = [
		'iInterID',
		'cSdOrderNo',
		'cCustOrderNo',
		'cSTCode',
		'cBusType',
		'cCustNo',
		'cCustName',
		'cPriorityType',
		'cPayCode',
		'cExch_name',
		'iExchRate',
		'iTaxRate',
		'dDate',
		'cDeptNo',
		'cPersonCode',
		'cSCCode',
		'cAddCode',
		'cAddress',
		'cCusPerson',
		'iDJMoney',
		'cOperator',
		'dOpeDate',
		'cChecker',
		'dCheckDate',
		'cStatus',
		'iAuditTypeID',
		'cMpsed',
		'cNote',
		'cDefine1',
		'cDefine2',
		'cDefine3',
		'cDefine4',
		'cDefine5',
		'cDefine6',
		'cDefine7',
		'cDefine8',
		'cDefine9',
		'cDefine10',
		'cDefine11',
		'cDefine12',
		'cDefine13',
		'cDefine14',
		'cDefine15',
		'cDefine16',
		'cColor',
		'iVTID',
		'qkts',
		'cGatheringplan',
		'cCloser',
		'dCloseDate',
		'iPrintCount',
		'cSaleType',
		'cFxNo',
		'cModifier',
		'dModifyDate',
		'cCusPhoneNum',
		'iDiscountAmount',
		'iAfterDisAmount',
		'iRcvAmount',
		'cSdOrderType',
		'cProjectNo',
		'iNstructionsCode',
		'iOriAmount',
		'cLastSDOrderNo',
	];
	@PrimaryColumn({ type: 'int' })
	['iInterID']?: number;

	@Column({ type: String })
	['cSdOrderNo']?: string;

	@Column({ type: String })
	['cCustOrderNo']?: string;

	@Column({ type: String })
	['cSTCode']?: string;

	@Column({ type: String })
	['cBusType']?: string;

	@Column({ type: String })
	['cCustNo']?: string;

	@Column({ type: String })
	['cCustName']?: string;

	@Column({ type: String })
	['cPriorityType']?: string;

	@Column({ type: String })
	['cPayCode']?: string;

	@Column({ type: String })
	['cExch_name']?: string;

	@Column({ type: Number })
	['iExchRate']?: number;

	@Column({ type: Number })
	['iTaxRate']?: number;

	@Column({ type: Date })
	['dDate']?: string;

	@Column({ type: String })
	['cDeptNo']?: string;

	@Column({ type: String })
	['cPersonCode']?: string;

	@Column({ type: String })
	['cSCCode']?: string;

	@Column({ type: String })
	['cAddCode']?: string;

	@Column({ type: String })
	['cAddress']?: string;

	@Column({ type: String })
	['cCusPerson']?: string;

	@Column({ type: Number })
	['iDJMoney']?: number;

	@Column({ type: String })
	['cOperator']?: string;

	@Column({ type: Date })
	['dOpeDate']?: string;

	@Column({ type: String })
	['cChecker']?: string;

	@Column({ type: Date })
	['dCheckDate']?: string;

	@Column({ type: String })
	['cStatus']?: string;

	@Column({ type: Number })
	['iAuditTypeID']?: number;

	@Column({ type: String })
	['cMpsed']?: string;

	@Column({ type: String })
	['cNote']?: string;

	@Column({ type: String })
	['cDefine1']?: string;

	@Column({ type: String })
	['cDefine2']?: string;

	@Column({ type: String })
	['cDefine3']?: string;

	@Column({ type: String })
	['cDefine4']?: string;

	@Column({ type: String })
	['cDefine5']?: string;

	@Column({ type: String })
	['cDefine6']?: string;

	@Column({ type: String })
	['cDefine7']?: string;

	@Column({ type: String })
	['cDefine8']?: string;

	@Column({ type: String })
	['cDefine9']?: string;

	@Column({ type: String })
	['cDefine10']?: string;

	@Column({ type: Number })
	['cDefine11']?: number;

	@Column({ type: Number })
	['cDefine12']?: number;

	@Column({ type: Number })
	['cDefine13']?: number;

	@Column({ type: Number })
	['cDefine14']?: number;

	@Column({ type: Date })
	['cDefine15']?: string;

	@Column({ type: Date })
	['cDefine16']?: string;

	@Column({ type: String })
	['cColor']?: string;

	@Column({ type: Number })
	['iVTID']?: number;

	@Column({ type: String })
	['qkts']?: Buffer;

	@Column({ type: String })
	['cGatheringplan']?: string;

	@Column({ type: String })
	['cCloser']?: string;

	@Column({ type: Date })
	['dCloseDate']?: string;

	@Column({ type: Number })
	['iPrintCount']?: number;

	@Column({ type: String })
	['cSaleType']?: string;

	@Column({ type: String })
	['cFxNo']?: string;

	@Column({ type: String })
	['cModifier']?: string;

	@Column({ type: Date })
	['dModifyDate']?: string;

	@Column({ type: String })
	['cCusPhoneNum']?: string;

	@Column({ type: Number })
	['iDiscountAmount']?: number;

	@Column({ type: Number })
	['iAfterDisAmount']?: number;

	@Column({ type: Number })
	['iRcvAmount']?: number;

	@Column({ type: String })
	['cSdOrderType']?: string;

	@Column({ type: String })
	['cProjectNo']?: string;

	@Column({ type: String })
	['iNstructionsCode']?: string;

	@Column({ type: Number })
	['iOriAmount']?: number;

	@Column({ type: String })
	['cLastSDOrderNo']?: string;
	constructor() {
		super();
	}
	insert() {}
	update() {}
	delete() {}
}
