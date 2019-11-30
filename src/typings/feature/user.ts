import * as ActionTypes from '../../actions/account/constants'
import {AccountInfo, PageMinerInfo, MinerTradeInfo} from '../api/api'
// 1 add app specific types


export interface SetUserInfoAction {
  type: typeof ActionTypes.GET_USER_INFO_SUCCESS;
  data: AccountInfo;
}

export interface SetActiveMinerInfoAction {
  type: typeof ActionTypes.GET_ACTIVE_MINER_LIST;
  data: PageMinerInfo
}

export interface SetSoldMinerInfoAction {
  type: typeof ActionTypes.GET_SOLD_MINER_LIST;
  data: PageMinerInfo
}

export interface SetRecentTradeInfoAction {
  type: typeof ActionTypes.GET_RECENT_TRADE_LIST,
  data: MinerTradeInfo[]
}

export type UserInfoActionTypes = 
  | SetUserInfoAction
  | SetActiveMinerInfoAction
  | SetSoldMinerInfoAction
  | SetRecentTradeInfoAction;