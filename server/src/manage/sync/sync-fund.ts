import { funds } from "../dao/fund";
import { ca_db } from "../dao/ca-db";
import { fund_dao, fund_stock_dao } from "../dao";

async function syncFunds() {
	const fundsData = funds;
	const params = funds.map(item => {
		return {
			fundNo: item[0],
			fundName: item[2],
			fundType: item[3]
		}
	})
	console.error('3333', params.length);
	const _trans = await ca_db.transaction();
	const fundTable = await fund_dao.ensure()
	const data = params.filter(i => i.fundNo && i.fundName && i.fundType);
	console.error(data.length);

	try {
		await ca_db.batchInsert(fundTable, params).transacting(_trans);
		_trans.commit();
		return true;
	} catch (error) {
		console.error(error);
		_trans.rollback();
		return { error_no: 100201, error_msg: error.sqlMessage };
	}
}

export const fundsSync = {
	syncFunds
}