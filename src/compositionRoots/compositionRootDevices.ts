import 'reflect-metadata'
import {UsersQueryRepository} from "../infrastructure/repositories/usersQueryRepository";
import {RefreshTokenDevicesRepository} from "../infrastructure/repositories/refreshTokenDevicesRepository";
import {DevicesService} from "../domains/devices/devices.service";
import {Container} from "inversify";

export const devicesContainer = new Container()
devicesContainer.bind(RefreshTokenDevicesRepository).to(RefreshTokenDevicesRepository)
devicesContainer.bind(UsersQueryRepository).to(UsersQueryRepository)
devicesContainer.bind(DevicesService).to(DevicesService)