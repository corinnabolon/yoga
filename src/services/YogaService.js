import { AppState } from "../AppState.js"
import { Pose } from "../models/Pose.js"
import { PoseLevel } from "../models/PoseLevel.js"
import { logger } from "../utils/Logger.js"
import { yogaApi } from "./AxiosService.js"

class YogaService {

  async getPoses() {
    const res = await yogaApi.get("/poses")
    AppState.poses = res.data.map((posePOJO) => new Pose(posePOJO))
  }


  async getPosesByLevel(level) {
    const res = await yogaApi.get(`poses?level=${level}`)
    AppState.addLevelsArray = res.data.poses.map((posePOJO) => new PoseLevel(posePOJO))
    AppState.poses.forEach((pose) => {
      for (let i = 0; i < AppState.addLevelsArray.length; i++) {
        if (pose.englishName == AppState.addLevelsArray[i].name) {
          pose.level = level[0].toUpperCase() + level.slice(1)
        }
      }
    })
    AppState.poses.forEach((pose) => {
      if (pose.englishName == "Bridge") {
        pose.level = "Intermediate"
      }
    })
  }

}

export const yogaService = new YogaService()