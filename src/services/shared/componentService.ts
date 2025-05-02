import { eRegion, TMessageData } from "../../constants/types";

const ComponentService = {
  getRegionFromString(region: string) { 
    switch (region) {
      case "vn":
        return eRegion.VI;
      case "ja":
        return eRegion.JA;
      default:
        return eRegion.EN;
    }
  },

  getMessageData(messageData: TMessageData, region: eRegion) {
    switch (region) { 
      case eRegion.VI:
          return messageData.textVi;
      case eRegion.JA:
        return messageData.textJa;
      default:
        return messageData.textEn;
    }
  }
}

export default ComponentService;