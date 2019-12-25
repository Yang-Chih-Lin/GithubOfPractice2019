const readXlsxFile = require('read-excel-file/node');
 
// File path.C:\Users\vincent\practice2019\practice\FastBuildParse\excelFile
readXlsxFile('./excelFile/inputFile.xlsx').then((rows) => {
  // `rows` is an array of rows
  // each row being an array of cells.
  //console.log(rows);
})
 
// Readable Stream.
// readXlsxFile(fs.createReadStream('/path/to/file')).then((rows) => {
// })
const schema = {
  'X': { prop: 'X', type: Number },
  'no': { prop: 'no', type: String },
  'FinalT': { prop: 'FinalT', type: Number },
  'FinalF': { prop: 'FinalF', type: Number },
  'comment': { prop: 'comment', type: String },
  'title': { prop: 'title', type: String },
  'license_year1'	:{ prop: 	'license_year1'	, type:	String	},
  'license_no1'	:{ prop: 	'license_no1'	, type:	String	},
  'license_year2'	:{ prop: 	'license_year2'	, type:	String	},
  'license_no2'	:{ prop: 	'license_no2'	, type:	String	},
  'area'	:{ prop: 	'area'	, type:	String	},
  'buildingAmount1'	:{ prop: 	'buildingAmount1'	, type:	Number	},
  'buildingAmount2'	:{ prop: 	'buildingAmount2'	, type:	Number	},
  'houseNum'	:{ prop: 	'houseNum'	, type:	Number	},          //只有台中有
  'flooors'	:{ prop: 	'flooors'	, type:	Number	},
  'ground_floors'	:{ prop: 	'ground_floors'	, type:	Number	},
  'height'	:{ prop: 	'height'	, type:	Number	},
  'useSortA'	:{ prop: 	'useSortA'	, type:	Number	},
  'useSortB'	:{ prop: 	'useSortB'	, type:	Number	},
  'useSortC'	:{ prop: 	'useSortC'	, type:	Number	},
  'address'	:{ prop: 	'address'	, type:	String	},
  'B101T'	:{ prop: 	'B101T'	, type:	Number	},
  'B101F'	:{ prop: 	'B101F'	, type:	Number	},
  'B102T'	:{ prop: 	'B102T'	, type:	Number	},
  'B102F'	:{ prop: 	'B102F'	, type:	Number	},
  'B103T'	:{ prop: 	'B103T'	, type:	Number	},
  'B103F'	:{ prop: 	'B103F'	, type:	Number	},
  'userType_1'	:{ prop: 	'userType_1'	, type:	Number	},
  'userType_2'	:{ prop: 	'userType_2'	, type:	Number	},
  'userType_3'	:{ prop: 	'userType_3'	, type:	Number	},
  'userType_4'	:{ prop: 	'userType_4'	, type:	Number	},
  'date'	:{ prop: 	'date'	, type:	String	},
  'photo_infoT'	:{ prop: 	'photo_infoT'	, type:	Number	},
  'photo_infoF'	:{ prop: 	'photo_infoF'	, type:	Number	},
  'photo_info_comment'	:{ prop: 	'photo_info_comment'	, type:	String	},
  'B104A'	:{ prop: 	'B104A'	, type:	Number	},
  'B104B'	:{ prop: 	'B104B'	, type:	Number	},
  'B104C'	:{ prop: 	'B104C'	, type:	Number	},
  'B104D'	:{ prop: 	'B104D'	, type:	Number	},
  'B105A'	:{ prop: 	'B105A'	, type:	Number	},
  'B105B'	:{ prop: 	'B105B'	, type:	Number	},
  'B105C'	:{ prop: 	'B105C'	, type:	Number	},
  'B105D'	:{ prop: 	'B105D'	, type:	Number	},
  'B106A'	:{ prop: 	'B106A'	, type:	Number	},
  'B106B'	:{ prop: 	'B106B'	, type:	Number	},
  'B106C'	:{ prop: 	'B106C'	, type:	Number	},
  'B106D'	:{ prop: 	'B106D'	, type:	Number	},
  'B107A'	:{ prop: 	'B107A'	, type:	Number	},
  'B107B'	:{ prop: 	'B107B'	, type:	Number	},
  'B107C'	:{ prop: 	'B107C'	, type:	Number	},
  'B107D'	:{ prop: 	'B107D'	, type:	Number	},
  'B107E'	:{ prop: 	'B107E'	, type:	Number	},
  'B108A'	:{ prop: 	'B108A'	, type:	Number	},
  'B108B'	:{ prop: 	'B108B'	, type:	Number	},
  'B108C'	:{ prop: 	'B108C'	, type:	Number	},
  'B108D'	:{ prop: 	'B108D'	, type:	Number	},
  'B109A'	:{ prop: 	'B109A'	, type:	Number	},
  'B109B'	:{ prop: 	'B109B'	, type:	Number	},
  'B109C'	:{ prop: 	'B109C'	, type:	Number	},
  'B109D'	:{ prop: 	'B109D'	, type:	Number	},
  'B110A'	:{ prop: 	'B110A'	, type:	Number	},
  'B110B'	:{ prop: 	'B110B'	, type:	Number	},
  'B110C'	:{ prop: 	'B110C'	, type:	Number	},
  'B110D'	:{ prop: 	'B110D'	, type:	Number	},  
}


readXlsxFile('./excelFile/inputFile.xlsx', { schema }).then(({ rows, errors }) => {
  // `errors` have shape `{ row, column, error, value }`.
  console.log(rows,errors);
  var AllInfo = [];
  var fastFilter ={
    no: undefined, 
    //'b104': 0,
  user: {
		//type: Schema.ObjectId,
		ref: 'User'
	},
	modifyLog: [{
		date: {
            type: Date,
            default: Date.now
        },
		isOK: Boolean,
		reson: String,
		score: Number
	}],
	hasModifyEvent: Boolean,
	latitude: { type: String, default: "" },
	longitude: { type: String, default: "" },
	basicInfo: {
        evaluator: String,
        userType_1:Boolean,//建築師
        userType_2:Boolean,//結構師
        userType_3:Boolean,//土木師
        userType_4:Boolean,//其他
        userType_other:String,//其他填寫
        state: Number,
        Final:Number,//快篩結果是否需要初評
        comment: String,
        photo_info: Number,//圖說完整性
        photo_info_comment: String,//圖說備註
		title: String,
        no: String,
        noSetting1: String,//快篩編碼建照或使照
        noSetting2: String,//快篩編碼評估單位
		date: Date,
		county: String,
		country: String,
        village: String,
        s_county: String,//NEW地址正規劃:"s_county"為規範所使用之縣市名稱，"s_country"為規範所使用之鄉鎮市名稱
        s_country: String,//NEW
		address: String,

		height: Number,

        buildingAmount1: Number,//幢數
        buildingAmount2: Number,//棟數
        houseNum: Number,//戶數
        floors: Number,
        ground_floors: Number,

		useSort: String,
		useOther: String,


		/*新增申請人0807*/
		//license:{ type: String, default: "" },
		license_year1:{ type: String, default: "" },
        license_no1:{ type: String, default: "" },
        license_year2:{ type: String, default: "" },
		license_no2:{ type: String, default: "" },
		//license_other:{ type: String, default: "" },
		area:{ type: String, default: "" },
		/*新增申請人0807--end*/
	},
	isDelete: { type: Boolean, default: false },
	isEvaluate: Boolean,
	isArchived: Boolean,
	process: Number,
	/*新增申請人0807*/
	evaluation:{
		name:{ type: String, default: "" },
		no:{ type: String, default: "" },
		principal:{ type: String, default: "" },
		phone:{ type: String, default: "" },
		address: { type: String, default: "" },
		evaluator_phone:{ type: String, default: "" },
		evaluator_cellphone:{ type: String, default: "" },
		otherName:{ type: String, default: "" },

	},/*新增申請人0807*/
	applicant:{
		address: { type: String, default: "" },
		committee:{ type: String, default: "" },
		committee_name:{ type: String, default: "" },
		committee_no:{ type: String, default: "" },
		name1:{ type: String, default: "" },
		phone1:{ type: String, default: "" },
		cellphone1:{ type: String, default: "" },
		name2:{ type: String, default: "" },
		phone2:{ type: String, default: "" },
		cellphone2:{ type: String, default: "" },
		name3:{ type: String, default: "" },
		phone3:{ type: String, default: "" },
		report:{ type: String, default: "快篩" },
		other: {type: String, default: ""},
		purpose: {type: String, default: "公有建築物評估"}
	},

    FScore: Number,//快篩成績
    sameFinal: Boolean,//系統判斷basicInfo.Final與FScore的結果是否一致
    FinalReason: String,
    isFinished: Boolean,
	img: {
		type: String,
		default: 'img/ntut-1.png'
	},




	fastTable: {
		B101: Number,//快篩項目1
		B102: Number,//快篩項目2
		B103: Number,//快篩項目3
		B104: Number,//快篩項目4
		B105: Number,//快篩項目5
        B106: Number,//快篩項目6
        B107: Number,//快篩項目7
		B108: Number,//快篩項目8
		B109: Number,//快篩項目9
        B110: Number,//快篩項目10

        B101_comment: String,//快篩項目1備註
        B102_comment: String,//快篩項目2備註
        B103_comment: String,//快篩項目3備註
        B104_comment: String,//快篩項目4備註
        B105_comment: String,//快篩項目5備註
        B106_comment: String,//快篩項目6備註
        B107_comment: String,//快篩項目7備註
        B108_comment: String,//快篩項目8備註
        B109_comment: String,//快篩項目9備註
        B110_comment: String,//快篩項目10備註
	},
	photo: [
		{
			fileName: String,
			path: String,
			Info: String,
			Tag: String,
			verticalPhoto: Boolean
		}
	],
	planPhoto: [
		{
			fileName: String,
			path: String,
			Info: String,
			Tag: String,
			verticalPhoto: Boolean
		}
	],
	docFile: [
		{
			fileName: String,
			path: String,
            Info: String,
            Tag: String,
            mimetype: String
		}
	],
	Report: {
		fileName: String,
		path: String,
    },
    Subsidy: {
        type: Number,
		default: 0 // 0未標註、1有補助、2未補助
    },
    Tag: {
        type: Number,
		default: 0 // 0未標註、1為快篩案件、3為退件
    },
    TagVersion: {  //標註危老案件及是否補助之紀錄
        //type: Schema.ObjectId,
        ref: 'TagVersion'
    },
    inCheckUnArchived: { //判評估機構是否已確定解除封存案件！ true 代表正處理需要評估機構進行解封存
        type: Boolean,
        default: false
    },
    ArchivedVersion: {  //封存案件之紀錄！
        //type: Schema.ObjectId,
        ref: 'ArchiveVersion'
	},
	rejectReason: {
        type: String,
        default: ""
    },
  };
  rows.forEach(row => {
    fastFilter.no = row.no;
    //console.log(row.B104A, row.B104B, row.B104C, row.B104D);
    if(row.B104A = 1) {
      fastFilter.fastTable.B104 = 1;
    } else if(row.B104B = 1) {
      fastFilter.fastTable.B104 = 2;
    } else if(row.B104C = 1) {
      fastFilter.fastTable.B104 = 3;
    } else if(row.B104D) {
      fastFilter.fastTable.B104 = 4;
    } else {
      fastFilter.fastTable.B104 = 0;
    }
    console.log(fastFilter.fastTable.B104);
    AllInfo.push({fastFilter});
    
  });

  console.log(AllInfo);
  console.log(AllInfo.no);
})