export class PoseLevel {

  constructor(data) {
    this.id = data.id
    this.level = data.difficulty_level
    this.name = data.english_name
  }

}

const poseLevelData = `
{
  "id": 2,
  "difficulty_level": "Beginner",
  "english_name": "Half Boat",
  "sanskrit_name_adapted": "Ardha Navasana",
  "sanskrit_name": "Ardha Nāvāsana",
  "translation_name": "ardha = half, nāva = boat, āsana = posture",
  "pose_description": "From a seated position the hands are gripped around the back of the legs and the knees are bent in a 90 degree angle.  Both legs are pulled in towards the abdomen.  The core is engaged to maintain balance on the sits bones (be sure that the back does not round).  The front of the torso lengthens between the pubis and top of the sternum as the spine extends in both directions reaching up to the sky and rooting down to the earth.  The gaze is forward and Bandhas are engaged.",
  "pose_benefits": "Strengthens the abdomen, hip flexors and spine.  Stimulates the kidneys, thyroid, prostate glands and intestines.  Helps relieve stress.  Improves digestion.",
  "url_svg": "https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483073/yoga-api/2_ozh7sv.svg",
  "url_png": "https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483073/yoga-api/2_ozh7sv.png",
  "url_svg_alt": "https://www.dropbox.com/s/1nx0r94msxjwvyp/boatbentlegs.svg?raw=1"
}
`