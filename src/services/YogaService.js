import { AppState } from "../AppState.js"
import { Pose } from "../models/Pose.js"
import { PoseLevel } from "../models/PoseLevel.js"
import { logger } from "../utils/Logger.js"
import { yogaApi } from "./AxiosService.js"

class YogaService {

  async getPoses() {
    const res = await yogaApi.get("/poses")
    AppState.poses = res.data.map((posePOJO) => new Pose(posePOJO))
    logger.log(AppState.poses)
  }

  async getBeginnerPoses() {
    const res = await yogaApi.get("poses?level=beginner")
    logger.log("Beginner poses res.data", res.data)
    AppState.beginnerPoses = res.data.poses.map((posePOJO) => new PoseLevel(posePOJO))
    logger.log(AppState.beginnerPoses)
    logger.log("AppState poses array before checking", AppState.poses)
    AppState.poses.forEach((pose) => {
      for (let i = 0; i < AppState.beginnerPoses.length; i++) {
        if (pose.englishName == AppState.beginnerPoses[i].name) {
          pose.level = "Beginner"
        }
      }
      logger.log("AppState poses array after checking", AppState.poses)
    })
  }

}

export const yogaService = new YogaService()