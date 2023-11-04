export class Pose {

  constructor(data) {
    this.id = data.id
    this.englishName = data.english_name
    this.sanskritName = data.sanskrit_name
    this.translation = data.translation_name
    this.description = data.pose_description
    this.benefits = data.pose_benefits
    this.imgUrl = data.url_png
    this.level = null
  }

}

const poseData = `
{
  "id": 41,
  "english_name": "Tree",
  "sanskrit_name_adapted": "Vrksasana",
  "sanskrit_name": "Vṛkṣāsana",
  "translation_name": "vṛkṣa = tree, āsana = posture",
  "pose_description": "From a standing position, one foot is rooted into the earth with the opposite heel rooted into the inner thigh with the toes pointing towards the earth.  The pelvis and the chin are tucked in.  The arms are lifted above the head with the palms together in prayer position.  The gaze is forward.",
  "pose_benefits": "Strengthens the legs, ankles, and feet.  Improves flexibility in the hips and knees.  Improves balance.",
  "url_svg": "https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483094/yoga-api/41_veknug.svg",
  "url_png": "https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483094/yoga-api/41_veknug.png",
  "url_svg_alt": "https://www.dropbox.com/s/mn2ktlihp12mtfa/tree.svg?raw=1"
}
`