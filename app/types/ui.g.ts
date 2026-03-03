export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

export type TabIconProps = {
  image: string
  title: string
  size?: {
    width: number
    height: number
  }
}

export enum DeviceType {
  Iphone_SE='Iphone SE',
  Samsung_Galaxy_S20='Samsung Galaxy S20',
  Ipad ='Ipad',
}

export const DeviceSize: Record<DeviceType, {width: number; height: number}> = {
  [DeviceType.Iphone_SE] : {
    width: 375,
    height: 667,
  },
  [DeviceType.Samsung_Galaxy_S20] : {
    width: 360,
    height: 800,
  },
  [DeviceType.Ipad] : {
    width: 768,
    height: 1024,
  },
}