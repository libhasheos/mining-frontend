import * as ActionTypes from '../../actions/account/constants'
import {AccountInfo, PageMinerInfo, MinerTradeInfo, PageMinerRewardDetail, PageMinerTradeInfo} from '../api/api'
// 1 add app specific types


export interface SetUserInfoAction {
  type: typeof ActionTypes.GET_USER_INFO_SUCCESS;
  data: AccountInfo;
}

export interface SetActiveMinerInfoAction {
  type: typeof ActionTypes.GET_ACTIVE_MINER_LIST;
  data: PageMinerInfo
}

export interface EmptyActiveMinerInfoAction {
  type: typeof ActionTypes.EMPTY_ACTIVE_MINER_LIST;
}
export interface EmptyRecentTradeAction {
  type: typeof ActionTypes.EMPTY_RECENT_TRADE_LIST;
}



export interface SetSoldMinerInfoAction {
  type: typeof ActionTypes.GET_SOLD_MINER_LIST;
  data: PageMinerInfo
}
export interface SetSoldMinerAction {
  type: typeof ActionTypes.SET_SOLD_MINER_ID;
  data: string
}
export interface EmptySoldMinerAction {
  type: typeof ActionTypes.EMPTY_SOLD_MINER_LIST;
}

export interface SetRecentTradeInfoAction {
  type: typeof ActionTypes.GET_RECENT_TRADE_LIST,
  data: MinerTradeInfo[]
}

export interface SetMinerTradeInfoAction {
  type: typeof ActionTypes.GET_MINER_TRADE_LIST,
  data: PageMinerTradeInfo
}

export interface EmptyMinerTrade {
  type: typeof ActionTypes.EMPTY_MINER_TRADE_LIST
}

export type UserInfoActionTypes = 
  | SetUserInfoAction
  | SetActiveMinerInfoAction
  | SetSoldMinerInfoAction
  | SetRecentTradeInfoAction
  | SetMinerTradeInfoAction
  | EmptyActiveMinerInfoAction
  | SetSoldMinerAction
  | EmptyRecentTradeAction
  | EmptySoldMinerAction
  | EmptyMinerTrade;