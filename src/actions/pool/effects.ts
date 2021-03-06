import * as ActionTyps from './constants';
import {ForgeInfo, ForgePage, PoolInfo} from '../../typings/api/api'
import { AppAction } from '../../typings/feature';

export const setForgeInfo = (forgeInfo: ForgeInfo): AppAction => ({
  type: ActionTyps.GET_FORGE_INFO_SUCCESS,
  data: forgeInfo
});

export const setForgePageInfo = (forgePage: ForgePage): AppAction => ({
  type: ActionTyps.GET_FORGE_PAGE_INFO_SUCCESS,
  data: forgePage
});
export const setPoolMinerInfo = (PoolInfo: PoolInfo): AppAction => ({
  type: ActionTyps.SET_POOL_INFO,
  data: PoolInfo
})