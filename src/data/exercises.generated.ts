export interface ExerciseItem {
  id: string;
  name: string;
  workoutName: string;
  muscle: string;
  equipment: string;
  image?: string;
  media?: string;
  mediaType?: 'video' | 'image';
}

export const exercises: ExerciseItem[] = [
    {
        "id":  "video-1",
        "name":  "3 4 Sit up",
        "workoutName":  "3 4 Sit up",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "00011201-3-4-Sit-up_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-2",
        "name":  "45 Side Bend",
        "workoutName":  "45 Side Bend",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "00021201-45-Side-Bend_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-3",
        "name":  "Air Bike M",
        "workoutName":  "Air Bike M",
        "muscle":  "Cardio",
        "equipment":  "Machine",
        "media":  "00031201-air-bike-m_waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-4",
        "name":  "Alternate Heel Touchers",
        "workoutName":  "Alternate Heel Touchers",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "00061201-Alternate-Heel-Touchers_waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-5",
        "name":  "Assisted Chest Dip (Kneeling)",
        "workoutName":  "Assisted Chest Dip (Kneeling)",
        "muscle":  "Chest",
        "equipment":  "None",
        "media":  "00091201-Assisted-Chest-Dip-(kneeling)_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-6",
        "name":  "Assisted Triceps Dip (Kneeling)",
        "workoutName":  "Assisted Triceps Dip (Kneeling)",
        "muscle":  "Triceps",
        "equipment":  "None",
        "media":  "00191201-Assisted-Triceps-Dip-(kneeling)_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-7",
        "name":  "Barbell Bench Press",
        "workoutName":  "Barbell Bench Press",
        "muscle":  "Chest",
        "equipment":  "Barbell",
        "media":  "00251201-Barbell-Bench-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-8",
        "name":  "Barbell Bent Over Row",
        "workoutName":  "Barbell Bent Over Row",
        "muscle":  "Upper Back",
        "equipment":  "Barbell",
        "media":  "00271201-Barbell-Bent-Over-Row_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-9",
        "name":  "Barbell Clean and Press",
        "workoutName":  "Barbell Clean and Press",
        "muscle":  "Shoulders",
        "equipment":  "Barbell",
        "media":  "00281201-Barbell-Clean-and-Press_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-10",
        "name":  "Barbell Close Grip Bench Press",
        "workoutName":  "Barbell Close Grip Bench Press",
        "muscle":  "Triceps",
        "equipment":  "Barbell",
        "media":  "00301201-Barbell-Close-Grip-Bench-Press_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-11",
        "name":  "Barbell Curl",
        "workoutName":  "Barbell Curl",
        "muscle":  "Biceps",
        "equipment":  "Barbell",
        "media":  "00311201-Barbell-Curl_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-12",
        "name":  "Barbell Deadlift",
        "workoutName":  "Barbell Deadlift",
        "muscle":  "Glutes",
        "equipment":  "Barbell",
        "media":  "00321201-Barbell-Deadlift_Hips-FIX.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-13",
        "name":  "Barbell Decline Bench Press",
        "workoutName":  "Barbell Decline Bench Press",
        "muscle":  "Chest",
        "equipment":  "Barbell",
        "media":  "00331201-Barbell-Decline-Bench-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-14",
        "name":  "Barbell Drag Curl",
        "workoutName":  "Barbell Drag Curl",
        "muscle":  "Biceps",
        "equipment":  "Barbell",
        "media":  "00381201-Barbell-Drag-Curl_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-15",
        "name":  "Barbell Front Raise",
        "workoutName":  "Barbell Front Raise",
        "muscle":  "Shoulders",
        "equipment":  "Barbell",
        "media":  "00411101-Barbell-Front-Raise_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-16",
        "name":  "Barbell Full Squat",
        "workoutName":  "Barbell Full Squat",
        "muscle":  "Quadriceps",
        "equipment":  "Barbell",
        "media":  "00431201-Barbell-Full-Squat_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-17",
        "name":  "Barbell Good Morning",
        "workoutName":  "Barbell Good Morning",
        "muscle":  "Quadriceps",
        "equipment":  "Barbell",
        "media":  "00441201-Barbell-Good-Morning_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-18",
        "name":  "Barbell Hack Squat",
        "workoutName":  "Barbell Hack Squat",
        "muscle":  "Glutes",
        "equipment":  "Barbell",
        "media":  "00461201-Barbell-Hack-Squat_Hips.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-19",
        "name":  "Barbell Incline Bench Press",
        "workoutName":  "Barbell Incline Bench Press",
        "muscle":  "Chest",
        "equipment":  "Barbell",
        "media":  "00471201-Barbell-Incline-Bench-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-20",
        "name":  "Barbell Jm Bench Press",
        "workoutName":  "Barbell Jm Bench Press",
        "muscle":  "Triceps",
        "equipment":  "Barbell",
        "media":  "00521201-Barbell-JM-Bench-Press_Upper-Arms-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-21",
        "name":  "Barbell Lunge",
        "workoutName":  "Barbell Lunge",
        "muscle":  "Quadriceps",
        "equipment":  "Barbell",
        "media":  "00541201-Barbell-Lunge_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-22",
        "name":  "Barbell Lying Triceps Extension Skull Crusher",
        "workoutName":  "Barbell Lying Triceps Extension Skull Crusher",
        "muscle":  "Triceps",
        "equipment":  "Barbell",
        "media":  "00601201-Barbell-Lying-Triceps-Extension-Skull-Crusher_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-23",
        "name":  "Barbell Overhead Squat",
        "workoutName":  "Barbell Overhead Squat",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "00691201-Barbell-Overhead-Squat_Thighs-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-24",
        "name":  "Barbell Preacher Curl",
        "workoutName":  "Barbell Preacher Curl",
        "muscle":  "Biceps",
        "equipment":  "Barbell",
        "media":  "00701201-Barbell-Preacher-Curl_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-25",
        "name":  "Barbell Prone Incline Curl",
        "workoutName":  "Barbell Prone Incline Curl",
        "muscle":  "Biceps",
        "equipment":  "Barbell",
        "media":  "00721201-Barbell-Prone-Incline-Curl_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-26",
        "name":  "Barbell Rack Pull",
        "workoutName":  "Barbell Rack Pull",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "00741201-Barbell-Rack-Pull_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-27",
        "name":  "Barbell Revers Wrist Curl Ii",
        "workoutName":  "Barbell Revers Wrist Curl Ii",
        "muscle":  "Forearms",
        "equipment":  "Barbell",
        "media":  "00791201-Barbell-Revers-Wrist-Curl-II_Forearms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-28",
        "name":  "Barbell Reverse Curl",
        "workoutName":  "Barbell Reverse Curl",
        "muscle":  "Biceps",
        "equipment":  "Barbell",
        "media":  "00801201-Barbell-Reverse-Curl_Forearm.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-29",
        "name":  "Barbell Romanian Deadlift",
        "workoutName":  "Barbell Romanian Deadlift",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "00851201-Barbell-Romanian-Deadlift_Hips-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-30",
        "name":  "Barbell Seated Overhead Triceps Extension",
        "workoutName":  "Barbell Seated Overhead Triceps Extension",
        "muscle":  "Triceps",
        "equipment":  "Barbell",
        "media":  "00921201-Barbell-Seated-Overhead-Triceps-Extension_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-31",
        "name":  "Barbell Shrug",
        "workoutName":  "Barbell Shrug",
        "muscle":  "Upper Back",
        "equipment":  "Barbell",
        "media":  "00951201-Barbell-Shrug_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-32",
        "name":  "Barbell Straight Leg Deadlift",
        "workoutName":  "Barbell Straight Leg Deadlift",
        "muscle":  "Quadriceps",
        "equipment":  "Barbell",
        "media":  "01161201-Barbell-Straight-Leg-Deadlift_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-33",
        "name":  "Barbell Sumo Deadlift",
        "workoutName":  "Barbell Sumo Deadlift",
        "muscle":  "Glutes",
        "equipment":  "Barbell",
        "media":  "01171201-Barbell-Sumo-Deadlift_Hips.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-34",
        "name":  "Barbell Wide Bench Press",
        "workoutName":  "Barbell Wide Bench Press",
        "muscle":  "Chest",
        "equipment":  "Barbell",
        "media":  "01221201-Barbell-Wide-Bench-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-35",
        "name":  "Battling Ropes",
        "workoutName":  "Battling Ropes",
        "muscle":  "Other",
        "equipment":  "Rope",
        "media":  "01281201-Battling-Ropes.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-36",
        "name":  "Bycicle Twisting Crunch",
        "workoutName":  "Bycicle Twisting Crunch",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "01471201-Bycicle-Twisting-Crunch_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-37",
        "name":  "Cable Alternate Triceps Extension",
        "workoutName":  "Cable Alternate Triceps Extension",
        "muscle":  "Triceps",
        "equipment":  "Cable",
        "media":  "01491201-Cable-Alternate-Triceps-Extension_Upper-Arms_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-38",
        "name":  "Cable Bar Lateral Pulldown",
        "workoutName":  "Cable Bar Lateral Pulldown",
        "muscle":  "Upper Back",
        "equipment":  "Cable",
        "media":  "01501201-Cable-Bar-Lateral-Pulldown_Back (1).mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-39",
        "name":  "Cable Bar Lateral Pulldown",
        "workoutName":  "Cable Bar Lateral Pulldown",
        "muscle":  "Upper Back",
        "equipment":  "Cable",
        "media":  "01501201-Cable-Bar-Lateral-Pulldown_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-40",
        "name":  "Cable Bench Press",
        "workoutName":  "Cable Bench Press",
        "muscle":  "Chest",
        "equipment":  "Cable",
        "media":  "01511201-Cable-Bench-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-41",
        "name":  "Cable Curl",
        "workoutName":  "Cable Curl",
        "muscle":  "Biceps",
        "equipment":  "Cable",
        "media":  "01561201-Cable-Curl_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-42",
        "name":  "Cable Front Raise",
        "workoutName":  "Cable Front Raise",
        "muscle":  "Shoulders",
        "equipment":  "Cable",
        "media":  "01621201-Cable-Front-Raise_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-43",
        "name":  "Cable Hammer Curl",
        "workoutName":  "Cable Hammer Curl",
        "muscle":  "Biceps",
        "equipment":  "Cable",
        "media":  "01661201-Cable-Hammer-Curl_Forearm.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-44",
        "name":  "Cable Kneeling Crunch",
        "workoutName":  "Cable Kneeling Crunch",
        "muscle":  "Abdominals",
        "equipment":  "Cable",
        "media":  "01751201-Cable-Kneeling-Crunch_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-45",
        "name":  "Cable Lateral Raise",
        "workoutName":  "Cable Lateral Raise",
        "muscle":  "Shoulders",
        "equipment":  "Cable",
        "media":  "01781201-Cable-Lateral-Raise_shoulder.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-46",
        "name":  "Cable Low Fly",
        "workoutName":  "Cable Low Fly",
        "muscle":  "Chest",
        "equipment":  "Cable",
        "media":  "01791201-Cable-Low-Fly_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-47",
        "name":  "Cable One Arm Curl",
        "workoutName":  "Cable One Arm Curl",
        "muscle":  "Biceps",
        "equipment":  "Cable",
        "media":  "01901201-Cable-One-Arm-Curl_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-48",
        "name":  "Cable One Arm Lateral Raise",
        "workoutName":  "Cable One Arm Lateral Raise",
        "muscle":  "Shoulders",
        "equipment":  "Cable",
        "media":  "01921201-Cable-One-Arm-Lateral-Raise_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-49",
        "name":  "Cable Overhead Triceps Extension (Rope Attachment)",
        "workoutName":  "Cable Overhead Triceps Extension (Rope Attachment)",
        "muscle":  "Triceps",
        "equipment":  "Cable",
        "media":  "01941201-Cable-Overhead-Triceps-Extension-(rope-attachment)_Upper-Arms-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-50",
        "name":  "Cable Pushdown",
        "workoutName":  "Cable Pushdown",
        "muscle":  "Triceps",
        "equipment":  "Cable",
        "media":  "02011201-Cable-Pushdown_Upper-Arms (1).mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-51",
        "name":  "Cable Pushdown",
        "workoutName":  "Cable Pushdown",
        "muscle":  "Triceps",
        "equipment":  "Cable",
        "media":  "02011201-Cable-Pushdown_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-52",
        "name":  "Cable Reverse Curl",
        "workoutName":  "Cable Reverse Curl",
        "muscle":  "Biceps",
        "equipment":  "Cable",
        "media":  "02061201-Cable-Reverse-Curl_Forearm.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-53",
        "name":  "Cable Reverse Grip Straight Back Seated High Row",
        "workoutName":  "Cable Reverse Grip Straight Back Seated High Row",
        "muscle":  "Upper Back",
        "equipment":  "Cable",
        "media":  "02081201-Cable-Reverse-grip-Straight-Back-Seated-High-Row_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-54",
        "name":  "Cable Seated Wide Grip Row",
        "workoutName":  "Cable Seated Wide Grip Row",
        "muscle":  "Upper Back",
        "equipment":  "Cable",
        "media":  "02181201-Cable-Seated-Wide-grip-Row_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-55",
        "name":  "Cable Shrug",
        "workoutName":  "Cable Shrug",
        "muscle":  "Upper Back",
        "equipment":  "Cable",
        "media":  "02201201-Cable-Shrug_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-56",
        "name":  "Cable Standing Cross Over High Reverse Fly",
        "workoutName":  "Cable Standing Cross Over High Reverse Fly",
        "muscle":  "Other",
        "equipment":  "Cable",
        "media":  "02251201-Cable-Standing-Cross-over-High-Reverse-Fly_Shoulders_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-57",
        "name":  "Cable Straight Arm Pulldown (With Rope)",
        "workoutName":  "Cable Straight Arm Pulldown (With Rope)",
        "muscle":  "Upper Back",
        "equipment":  "Cable",
        "media":  "02371201-Cable-Straight-Arm-Pulldown-(with-rope)_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-58",
        "name":  "Cable Straight Arm Pulldown",
        "workoutName":  "Cable Straight Arm Pulldown",
        "muscle":  "Upper Back",
        "equipment":  "Cable",
        "media":  "02381201-Cable-Straight-Arm-Pulldown_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-59",
        "name":  "Cable Upright Row",
        "workoutName":  "Cable Upright Row",
        "muscle":  "Shoulders",
        "equipment":  "Cable",
        "media":  "02461201-Cable-Upright-Row_shoulder.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-60",
        "name":  "Chest Dip",
        "workoutName":  "Chest Dip",
        "muscle":  "Chest",
        "equipment":  "None",
        "media":  "02511201-Chest-Dip_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-61",
        "name":  "Close Grip Push up",
        "workoutName":  "Close Grip Push up",
        "muscle":  "Triceps",
        "equipment":  "None",
        "media":  "02591201-Close-Grip-Push-up_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-62",
        "name":  "Crunch Floor M",
        "workoutName":  "Crunch Floor M",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "02741201-Crunch-Floor-m_waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-63",
        "name":  "Decline Crunch",
        "workoutName":  "Decline Crunch",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "02771201-Decline-Crunch_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-64",
        "name":  "Decline Push Up",
        "workoutName":  "Decline Push Up",
        "muscle":  "Chest",
        "equipment":  "None",
        "media":  "02791201-Decline-Push-Up_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-65",
        "name":  "Diamond Push Up",
        "workoutName":  "Diamond Push Up",
        "muscle":  "Triceps",
        "equipment":  "None",
        "media":  "02831201-Diamond-Push-up_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-66",
        "name":  "Dumbbell Arnold Press Ii",
        "workoutName":  "Dumbbell Arnold Press Ii",
        "muscle":  "Shoulders",
        "equipment":  "Dumbbell",
        "media":  "02871201-Dumbbell-Arnold-Press-II_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-67",
        "name":  "Dumbbell Around Pullover",
        "workoutName":  "Dumbbell Around Pullover",
        "muscle":  "Chest",
        "equipment":  "Dumbbell",
        "media":  "02881201-Dumbbell-Around-Pullover_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-68",
        "name":  "Dumbbell Bench Press",
        "workoutName":  "Dumbbell Bench Press",
        "muscle":  "Chest",
        "equipment":  "Dumbbell",
        "media":  "02891201-Dumbbell-Bench-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-69",
        "name":  "Dumbbell Bench Seated Press",
        "workoutName":  "Dumbbell Bench Seated Press",
        "muscle":  "Shoulders",
        "equipment":  "Dumbbell",
        "media":  "02901201-Dumbbell-Bench-Seated-Press_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-70",
        "name":  "Dumbbell Bent Over Row",
        "workoutName":  "Dumbbell Bent Over Row",
        "muscle":  "Upper Back",
        "equipment":  "Dumbbell",
        "media":  "02921201-Dumbbell-Bent-over-Row_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-71",
        "name":  "Dumbbell Bent Over Row",
        "workoutName":  "Dumbbell Bent Over Row",
        "muscle":  "Upper Back",
        "equipment":  "Dumbbell",
        "media":  "02931201-Dumbbell-Bent-Over-Row_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-72",
        "name":  "Dumbbell Biceps Curl",
        "workoutName":  "Dumbbell Biceps Curl",
        "muscle":  "Biceps",
        "equipment":  "Dumbbell",
        "media":  "02941201-Dumbbell-Biceps-Curl_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-73",
        "name":  "Dumbbell Concentration Curl",
        "workoutName":  "Dumbbell Concentration Curl",
        "muscle":  "Biceps",
        "equipment":  "Dumbbell",
        "media":  "02971201-Dumbbell-Concentration-Curl_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-74",
        "name":  "Dumbbell Deadlift",
        "workoutName":  "Dumbbell Deadlift",
        "muscle":  "Glutes",
        "equipment":  "Dumbbell",
        "media":  "03001201-Dumbbell-Deadlift_Hips.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-75",
        "name":  "Dumbbell Decline Bench Press",
        "workoutName":  "Dumbbell Decline Bench Press",
        "muscle":  "Chest",
        "equipment":  "Dumbbell",
        "media":  "03011201-Dumbbell-Decline-Bench-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-76",
        "name":  "Dumbbell Decline Fly",
        "workoutName":  "Dumbbell Decline Fly",
        "muscle":  "Chest",
        "equipment":  "Dumbbell",
        "media":  "03021201-Dumbbell-Decline-Fly_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-77",
        "name":  "Dumbbell Fly",
        "workoutName":  "Dumbbell Fly",
        "muscle":  "Chest",
        "equipment":  "Dumbbell",
        "media":  "03081201-Dumbbell-Fly_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-78",
        "name":  "Dumbbell Front Raise",
        "workoutName":  "Dumbbell Front Raise",
        "muscle":  "Shoulders",
        "equipment":  "Dumbbell",
        "media":  "03101201-Dumbbell-Front-Raise_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-79",
        "name":  "Dumbbell Hammer Curl",
        "workoutName":  "Dumbbell Hammer Curl",
        "muscle":  "Biceps",
        "equipment":  "Dumbbell",
        "media":  "03121201-Dumbbell-Hammer-Curl-(version-2)_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-80",
        "name":  "Dumbbell Incline Bench Press",
        "workoutName":  "Dumbbell Incline Bench Press",
        "muscle":  "Chest",
        "equipment":  "Dumbbell",
        "media":  "03141201-Dumbbell-Incline-Bench-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-81",
        "name":  "Dumbbell Incline Biceps Curl",
        "workoutName":  "Dumbbell Incline Biceps Curl",
        "muscle":  "Biceps",
        "equipment":  "Dumbbell",
        "media":  "03151201-Dumbbell-Incline-Biceps-Curl_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-82",
        "name":  "Dumbbell Incline Fly",
        "workoutName":  "Dumbbell Incline Fly",
        "muscle":  "Chest",
        "equipment":  "Dumbbell",
        "media":  "03191201-Dumbbell-Incline-Fly_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-83",
        "name":  "Dumbbell Incline Row",
        "workoutName":  "Dumbbell Incline Row",
        "muscle":  "Upper Back",
        "equipment":  "Dumbbell",
        "media":  "03271201-Dumbbell-Incline-Row_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-84",
        "name":  "Dumbbell Kickback",
        "workoutName":  "Dumbbell Kickback",
        "muscle":  "Upper Arms",
        "equipment":  "Dumbbell",
        "media":  "03331201-Dumbbell-Kickback_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-85",
        "name":  "Dumbbell Lateral Raise",
        "workoutName":  "Dumbbell Lateral Raise",
        "muscle":  "Shoulders",
        "equipment":  "Dumbbell",
        "media":  "03341201-Dumbbell-Lateral-Raise_shoulder.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-86",
        "name":  "Dumbbell Lunge",
        "workoutName":  "Dumbbell Lunge",
        "muscle":  "Glutes",
        "equipment":  "Dumbbell",
        "media":  "03361201-Dumbbell-Lunge_Hips.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-87",
        "name":  "Dumbbell One Arm Triceps Extension (On Bench)",
        "workoutName":  "Dumbbell One Arm Triceps Extension (On Bench)",
        "muscle":  "Triceps",
        "equipment":  "Dumbbell",
        "media":  "03621201-Dumbbell-One-Arm-Triceps-Extension-(on-bench)_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-88",
        "name":  "Dumbbell Pullover",
        "workoutName":  "Dumbbell Pullover",
        "muscle":  "Chest",
        "equipment":  "Dumbbell",
        "media":  "03751201-Dumbbell-Pullover_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-89",
        "name":  "Dumbbell Rear Lunge",
        "workoutName":  "Dumbbell Rear Lunge",
        "muscle":  "Quadriceps",
        "equipment":  "Dumbbell",
        "media":  "03811201-Dumbbell-Rear-Lunge_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-90",
        "name":  "Dumbbell Revers Grip Biceps Curl",
        "workoutName":  "Dumbbell Revers Grip Biceps Curl",
        "muscle":  "Biceps",
        "equipment":  "Dumbbell",
        "media":  "03821201-Dumbbell-Revers-grip-Biceps-Curl_Forearms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-91",
        "name":  "Dumbbell Reverse Fly",
        "workoutName":  "Dumbbell Reverse Fly",
        "muscle":  "Shoulders",
        "equipment":  "Dumbbell",
        "media":  "03831201-Dumbbell-Reverse-Fly_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-92",
        "name":  "Dumbbell Seated Lateral Raise",
        "workoutName":  "Dumbbell Seated Lateral Raise",
        "muscle":  "Shoulders",
        "equipment":  "Dumbbell",
        "media":  "03961201-Dumbbell-Seated-Lateral-Raise_shoulder.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-93",
        "name":  "Dumbbell Seated Preacher Curl",
        "workoutName":  "Dumbbell Seated Preacher Curl",
        "muscle":  "Biceps",
        "equipment":  "Dumbbell",
        "media":  "04021201-Dumbbell-Seated-Preacher-Curl_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-94",
        "name":  "Dumbbell Seated Revers Grip Concentration Curl",
        "workoutName":  "Dumbbell Seated Revers Grip Concentration Curl",
        "muscle":  "Biceps",
        "equipment":  "Dumbbell",
        "media":  "04031201-Dumbbell-Seated-Revers-grip-Concentration-Curl_Forearms_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-95",
        "name":  "Dumbbell Seated Shoulder Press",
        "workoutName":  "Dumbbell Seated Shoulder Press",
        "muscle":  "Shoulders",
        "equipment":  "Dumbbell",
        "media":  "04051201-Dumbbell-Seated-Shoulder-Press_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-96",
        "name":  "Dumbbell Shrug",
        "workoutName":  "Dumbbell Shrug",
        "muscle":  "Upper Back",
        "equipment":  "Dumbbell",
        "media":  "04061201-Dumbbell-Shrug_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-97",
        "name":  "Dumbbell Side Bend",
        "workoutName":  "Dumbbell Side Bend",
        "muscle":  "Abdominals",
        "equipment":  "Dumbbell",
        "media":  "04071201-Dumbbell-Side-Bend_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-98",
        "name":  "Dumbbell Standing Calf Raise",
        "workoutName":  "Dumbbell Standing Calf Raise",
        "muscle":  "Calves",
        "equipment":  "Dumbbell",
        "media":  "04171201-Dumbbell-Standing-Calf-Raise_Calves.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-99",
        "name":  "Dumbbell Standing Overhead Press",
        "workoutName":  "Dumbbell Standing Overhead Press",
        "muscle":  "Shoulders",
        "equipment":  "Dumbbell",
        "media":  "04261201-Dumbbell-Standing-Overhead-Press_shoulder.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-100",
        "name":  "Dumbbell Standing Triceps Extension",
        "workoutName":  "Dumbbell Standing Triceps Extension",
        "muscle":  "Triceps",
        "equipment":  "Dumbbell",
        "media":  "04301201-Dumbbell-Standing-Triceps-Extension_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-101",
        "name":  "Dumbbell Tate Press",
        "workoutName":  "Dumbbell Tate Press",
        "muscle":  "Triceps",
        "equipment":  "Dumbbell",
        "media":  "04361201-Dumbbell-Tate-Press_Triceps.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-102",
        "name":  "Dumbbell Upright Row",
        "workoutName":  "Dumbbell Upright Row",
        "muscle":  "Shoulders",
        "equipment":  "Dumbbell",
        "media":  "04371201-Dumbbell-Upright-Row_shoulder.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-103",
        "name":  "Dumbbell Zottman Curl",
        "workoutName":  "Dumbbell Zottman Curl",
        "muscle":  "Biceps",
        "equipment":  "Dumbbell",
        "media":  "04391201-Dumbbell-Zottman-Curl_Upper-Arms-FIX.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-104",
        "name":  "Ez Barbell Curl",
        "workoutName":  "Ez Barbell Curl",
        "muscle":  "Biceps",
        "equipment":  "Barbell",
        "media":  "04471201-EZ-Barbell-Curl_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-105",
        "name":  "Front Plank M",
        "workoutName":  "Front Plank M",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "04631201-Front-Plank-m_waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-106",
        "name":  "Handstand Push Up",
        "workoutName":  "Handstand Push Up",
        "muscle":  "Shoulders",
        "equipment":  "None",
        "media":  "04711201-Handstand-Push-Up_Shoulders_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-107",
        "name":  "Hanging Straight Leg Hip Raise",
        "workoutName":  "Hanging Straight Leg Hip Raise",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "04741201-Hanging-Straight-Leg-Hip-Raise_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-108",
        "name":  "Inverted Row",
        "workoutName":  "Inverted Row",
        "muscle":  "Upper Back",
        "equipment":  "None",
        "media":  "04991201-Inverted-Row_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-109",
        "name":  "Jump Squat",
        "workoutName":  "Jump Squat",
        "muscle":  "Quadriceps",
        "equipment":  "None",
        "media":  "05141201-Jump-Squat_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-110",
        "name":  "Kettlebell One Arm Snatch",
        "workoutName":  "Kettlebell One Arm Snatch",
        "muscle":  "Other",
        "equipment":  "Kettlebell",
        "media":  "05421201-Kettlebell-One-Arm-Snatch_Shoulders_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-111",
        "name":  "Kettlebell Sumo High Pull",
        "workoutName":  "Kettlebell Sumo High Pull",
        "muscle":  "Other",
        "equipment":  "Kettlebell",
        "media":  "05481201-Kettlebell-Sumo-High-Pull_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-112",
        "name":  "Kettlebell Swing",
        "workoutName":  "Kettlebell Swing",
        "muscle":  "Full Body",
        "equipment":  "Kettlebell",
        "media":  "05491201-Kettlebell-Swing_Hips-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-113",
        "name":  "Kettlebell Thruster",
        "workoutName":  "Kettlebell Thruster",
        "muscle":  "Other",
        "equipment":  "Kettlebell",
        "media":  "05501201-Kettlebell-Thruster_Shoulders-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-114",
        "name":  "Kettlebell Turkish Get up (Squat Style)",
        "workoutName":  "Kettlebell Turkish Get up (Squat Style)",
        "muscle":  "Quadriceps",
        "equipment":  "Kettlebell",
        "media":  "05511201-Kettlebell-Turkish-Get-Up-(Squat-style)_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-115",
        "name":  "Landmine 180",
        "workoutName":  "Landmine 180",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "05621201-Landmine-180_waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-116",
        "name":  "Lateral Box Jump",
        "workoutName":  "Lateral Box Jump",
        "muscle":  "Quadriceps",
        "equipment":  "None",
        "media":  "05641201-Lateral-Box-Jump-(female)_Plyometrics-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-117",
        "name":  "Lever Assisted Chin up",
        "workoutName":  "Lever Assisted Chin up",
        "muscle":  "Other",
        "equipment":  "Machine",
        "media":  "05721201-Lever-Assisted-Chin-Up_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-118",
        "name":  "Lever Chest Press (Plate Loaded)",
        "workoutName":  "Lever Chest Press (Plate Loaded)",
        "muscle":  "Chest",
        "equipment":  "Machine",
        "media":  "05761201-Lever-Chest-Press-(plate-loaded)_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-119",
        "name":  "Lever Chest Press",
        "workoutName":  "Lever Chest Press",
        "muscle":  "Chest",
        "equipment":  "Machine",
        "media":  "05771201-Lever-Chest-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-120",
        "name":  "Lever Front Pulldown",
        "workoutName":  "Lever Front Pulldown",
        "muscle":  "Upper Back",
        "equipment":  "Machine",
        "media":  "05791201-Lever-Front-Pulldown_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-121",
        "name":  "Lever Lateral Raise",
        "workoutName":  "Lever Lateral Raise",
        "muscle":  "Shoulders",
        "equipment":  "Machine",
        "media":  "05841201-Lever-Lateral-Raise_shoulder.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-122",
        "name":  "Lever Leg Extension",
        "workoutName":  "Lever Leg Extension",
        "muscle":  "Quadriceps",
        "equipment":  "Machine",
        "media":  "05851201-Lever-Leg-Extension_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-123",
        "name":  "Lever Lying Leg Curl",
        "workoutName":  "Lever Lying Leg Curl",
        "muscle":  "Biceps",
        "equipment":  "Machine",
        "media":  "05861201-Lever-Lying-Leg-Curl_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-124",
        "name":  "Lever Military Press (Plate Loaded)",
        "workoutName":  "Lever Military Press (Plate Loaded)",
        "muscle":  "Shoulders",
        "equipment":  "Machine",
        "media":  "05871201-Lever-Military-Press-(plate-loaded)_shoulder.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-125",
        "name":  "Lever Neutral Grip Seated Row (Plate Loaded)",
        "workoutName":  "Lever Neutral Grip Seated Row (Plate Loaded)",
        "muscle":  "Upper Back",
        "equipment":  "Machine",
        "media":  "05881201-Lever-Neutral-Grip-Seated-Row-(plate-loaded)_Back-.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-126",
        "name":  "Lever Preacher Curl",
        "workoutName":  "Lever Preacher Curl",
        "muscle":  "Biceps",
        "equipment":  "Machine",
        "media":  "05921201-Lever-Preacher-Curl_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-127",
        "name":  "Lever Seated Fly",
        "workoutName":  "Lever Seated Fly",
        "muscle":  "Chest",
        "equipment":  "Machine",
        "media":  "05961201-Lever-Seated-Fly_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-128",
        "name":  "Lever Seated Leg Curl",
        "workoutName":  "Lever Seated Leg Curl",
        "muscle":  "Biceps",
        "equipment":  "Machine",
        "media":  "05991201-Lever-Seated-Leg-Curl_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-129",
        "name":  "Lever Seated Reverse Fly",
        "workoutName":  "Lever Seated Reverse Fly",
        "muscle":  "Shoulders",
        "equipment":  "Machine",
        "media":  "06021201-Lever-Seated-Reverse-Fly_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-130",
        "name":  "Lever Shrug (Plate Loaded)",
        "workoutName":  "Lever Shrug (Plate Loaded)",
        "muscle":  "Upper Back",
        "equipment":  "Machine",
        "media":  "06041201-Lever-Shrug-(plate-loaded)_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-131",
        "name":  "Lever T Bar Row (Plate Loaded)",
        "workoutName":  "Lever T Bar Row (Plate Loaded)",
        "muscle":  "Upper Back",
        "equipment":  "Machine",
        "media":  "06061201-Lever-T-bar-Row-(plate-loaded)_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-132",
        "name":  "Oblique Crunches Floor",
        "workoutName":  "Oblique Crunches Floor",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "06351201-Oblique-Crunches-Floor_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-133",
        "name":  "Power Clean",
        "workoutName":  "Power Clean",
        "muscle":  "Full Body",
        "equipment":  "None",
        "media":  "06481201-Power-Clean_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-134",
        "name":  "Pull Up",
        "workoutName":  "Pull Up",
        "muscle":  "Lats",
        "equipment":  "None",
        "media":  "06521201-Pull-up_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-135",
        "name":  "Push up M",
        "workoutName":  "Push up M",
        "muscle":  "Chest",
        "equipment":  "None",
        "media":  "06621201-Push-up-m_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-136",
        "name":  "Russian Twist",
        "workoutName":  "Russian Twist",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "06871201-Russian-Twist_waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-137",
        "name":  "Scapular Pull up",
        "workoutName":  "Scapular Pull up",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "06881201-Scapular-Pull-Up_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-138",
        "name":  "Shoulder Tap Push up",
        "workoutName":  "Shoulder Tap Push up",
        "muscle":  "Full Body",
        "equipment":  "None",
        "media":  "06991201-Shoulder-Tap-Push-up_Plyometrics.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-139",
        "name":  "Side Plank M",
        "workoutName":  "Side Plank M",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "07151201-Side-Plank-m_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-140",
        "name":  "Single Arm Push up",
        "workoutName":  "Single Arm Push up",
        "muscle":  "Chest",
        "equipment":  "None",
        "media":  "07251201-Single-Arm-Push-up_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-141",
        "name":  "Sled 45 Calf Press",
        "workoutName":  "Sled 45 Calf Press",
        "muscle":  "Calves",
        "equipment":  "Machine",
        "media":  "07381201-Sled-45-Calf-Press_Calves.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-142",
        "name":  "Sled 45 Leg Press",
        "workoutName":  "Sled 45 Leg Press",
        "muscle":  "Glutes",
        "equipment":  "Machine",
        "media":  "07391201-Sled-45-Leg-Press_Hips.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-143",
        "name":  "Smith Back Shrug",
        "workoutName":  "Smith Back Shrug",
        "muscle":  "Upper Back",
        "equipment":  "Smith Machine",
        "media":  "07461201-Smith-Back-Shrug_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-144",
        "name":  "Smith Bench Press",
        "workoutName":  "Smith Bench Press",
        "muscle":  "Chest",
        "equipment":  "Smith Machine",
        "media":  "07481201-Smith-Bench-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-145",
        "name":  "Smith Chair Squat",
        "workoutName":  "Smith Chair Squat",
        "muscle":  "Quadriceps",
        "equipment":  "Smith Machine",
        "media":  "07501201-Smith-Chair-Squat_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-146",
        "name":  "Smith Deadlift",
        "workoutName":  "Smith Deadlift",
        "muscle":  "Glutes",
        "equipment":  "Smith Machine",
        "media":  "07521201-Smith-Deadlift_Hips.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-147",
        "name":  "Smith Decline Bench Press",
        "workoutName":  "Smith Decline Bench Press",
        "muscle":  "Chest",
        "equipment":  "Smith Machine",
        "media":  "07531201-Smith-Decline-Bench-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-148",
        "name":  "Smith Incline Bench Press",
        "workoutName":  "Smith Incline Bench Press",
        "muscle":  "Chest",
        "equipment":  "Smith Machine",
        "media":  "07571201-Smith-Incline-Bench-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-149",
        "name":  "Trap Bar Deadlift",
        "workoutName":  "Trap Bar Deadlift",
        "muscle":  "Quadriceps",
        "equipment":  "None",
        "media":  "08111201-Trap-Bar-Deadlift_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-150",
        "name":  "Triceps Dip",
        "workoutName":  "Triceps Dip",
        "muscle":  "Triceps",
        "equipment":  "None",
        "media":  "08141201-Triceps-Dip_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-151",
        "name":  "Triceps Dips Floor",
        "workoutName":  "Triceps Dips Floor",
        "muscle":  "Triceps",
        "equipment":  "None",
        "media":  "08151201-Triceps-Dips-Floor_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-152",
        "name":  "V Up",
        "workoutName":  "V Up",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "08251201-V-up_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-153",
        "name":  "Weighted Front Raise",
        "workoutName":  "Weighted Front Raise",
        "muscle":  "Shoulders",
        "equipment":  "None",
        "media":  "08341201-Weighted-Front-Raise_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-154",
        "name":  "Weighted Pull up",
        "workoutName":  "Weighted Pull up",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "08411201-Weighted-Pull-Up_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-155",
        "name":  "Weighted Sissy Squat",
        "workoutName":  "Weighted Sissy Squat",
        "muscle":  "Quadriceps",
        "equipment":  "None",
        "media":  "08511201-Weighted-Sissy-Squat_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-156",
        "name":  "Weighted Svend Press",
        "workoutName":  "Weighted Svend Press",
        "muscle":  "Chest",
        "equipment":  "None",
        "media":  "08561201-Weighted-Svend-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-157",
        "name":  "Wheel Rollout",
        "workoutName":  "Wheel Rollout",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "08571201-Wheel-Rollout_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-158",
        "name":  "Wrist Roller",
        "workoutName":  "Wrist Roller",
        "muscle":  "Forearms",
        "equipment":  "None",
        "media":  "08591201-Wrist-Roller_Forearms_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-159",
        "name":  "Cable Twist (Up Down)",
        "workoutName":  "Cable Twist (Up Down)",
        "muscle":  "Abdominals",
        "equipment":  "Cable",
        "media":  "08621201-Cable-twist-(up-down)_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-160",
        "name":  "Reverse Plank",
        "workoutName":  "Reverse Plank",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "08671201-Reverse-plank_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-161",
        "name":  "Reverse Crunch M",
        "workoutName":  "Reverse Crunch M",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "08721201-Reverse-Crunch-m_waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-162",
        "name":  "Dumbbell Curtsey Lunge",
        "workoutName":  "Dumbbell Curtsey Lunge",
        "muscle":  "Other",
        "equipment":  "Dumbbell",
        "media":  "08811201-Dumbbell-Curtsey-lunge-(female)_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-163",
        "name":  "Band Deadlift",
        "workoutName":  "Band Deadlift",
        "muscle":  "Other",
        "equipment":  "Resistance Band",
        "media":  "08951201-Band-Deadlift-(female)_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-164",
        "name":  "Band Lateral Raise",
        "workoutName":  "Band Lateral Raise",
        "muscle":  "Other",
        "equipment":  "Resistance Band",
        "media":  "09071201-Band-Lateral-Raise-(female)_Shoulders_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-165",
        "name":  "Band Middle Fly",
        "workoutName":  "Band Middle Fly",
        "muscle":  "Other",
        "equipment":  "Resistance Band",
        "media":  "09131201-Band-Middle-Fly-(female)_Chest_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-166",
        "name":  "Band Standing Chest Press",
        "workoutName":  "Band Standing Chest Press",
        "muscle":  "Other",
        "equipment":  "Resistance Band",
        "media":  "09201201-Band-Standing-Chest-Press-(female)_Chest_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-167",
        "name":  "Band Front Raise",
        "workoutName":  "Band Front Raise",
        "muscle":  "Other",
        "equipment":  "Resistance Band",
        "media":  "09781201-Band-front-raise_Shoulders_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-168",
        "name":  "Lever Torso Rotation",
        "workoutName":  "Lever Torso Rotation",
        "muscle":  "Other",
        "equipment":  "Machine",
        "media":  "100651201-Lever-Torso-Rotation-(male)_Waist_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-169",
        "name":  "Weighted Plate Lu Raise",
        "workoutName":  "Weighted Plate Lu Raise",
        "muscle":  "Other",
        "equipment":  "Plate",
        "media":  "101141201-Weighted-Plate-LU-Raise-(male)_Shoulders_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-170",
        "name":  "Frog Jump",
        "workoutName":  "Frog Jump",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "101651201-Frog-Jump_Plyometrics_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-171",
        "name":  "Lying Neck Flexion",
        "workoutName":  "Lying Neck Flexion",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "101661201-Lying-Neck-Flexion_Neck_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-172",
        "name":  "Lying Neck Extension",
        "workoutName":  "Lying Neck Extension",
        "muscle":  "Neck",
        "equipment":  "None",
        "media":  "101671201-Lying-Neck-Extension_Neck_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-173",
        "name":  "Barbell Standing Single Leg Calf Raise",
        "workoutName":  "Barbell Standing Single Leg Calf Raise",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "101691201-Barbell-Standing-Single-Leg-Calf-Raise_Calves_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-174",
        "name":  "Hamstring Bridge",
        "workoutName":  "Hamstring Bridge",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "101801201-Hamstring-Bridge-(VERSION-2)-(female)_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-175",
        "name":  "Burpee Over the Bar",
        "workoutName":  "Burpee Over the Bar",
        "muscle":  "Full Body",
        "equipment":  "None",
        "media":  "101811201-Burpee-Over-the-Bar-(male)_Plyometrics_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-176",
        "name":  "Lever Pec Deck Fly",
        "workoutName":  "Lever Pec Deck Fly",
        "muscle":  "Chest",
        "equipment":  "Machine",
        "media":  "10301201-Lever-Pec-Deck-Fly_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-177",
        "name":  "Lever Alternate Biceps Curl",
        "workoutName":  "Lever Alternate Biceps Curl",
        "muscle":  "Biceps",
        "equipment":  "Machine",
        "media":  "10321201-Lever-Alternate-Biceps-Curl_Upper-Arms_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-178",
        "name":  "Weighted Lying Neck Extension",
        "workoutName":  "Weighted Lying Neck Extension",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "10421201-Weighted-Lying-Neck-Extension_Neck_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-179",
        "name":  "Weighted Lying Neck Flexion",
        "workoutName":  "Weighted Lying Neck Flexion",
        "muscle":  "Neck",
        "equipment":  "None",
        "media":  "10431201-Weighted-Lying-Neck-Flexion_neck.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-180",
        "name":  "Barbell Hip Thrust",
        "workoutName":  "Barbell Hip Thrust",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "10601201-Barbell-Hip-Thrust_Hips-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-181",
        "name":  "Barbell Sumo Squat",
        "workoutName":  "Barbell Sumo Squat",
        "muscle":  "Quadriceps",
        "equipment":  "Barbell",
        "media":  "10631201-Barbell-sumo-squat_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-182",
        "name":  "Sumo Squat",
        "workoutName":  "Sumo Squat",
        "muscle":  "Quadriceps",
        "equipment":  "None",
        "media":  "10641201-Sumo-Squat-(male)_Thighs-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-183",
        "name":  "Suspender Arm Curl",
        "workoutName":  "Suspender Arm Curl",
        "muscle":  "Biceps",
        "equipment":  "Suspension",
        "media":  "10701201-Suspender-Arm-Curl-(female)_Upper-Arms_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-184",
        "name":  "Suspender Row",
        "workoutName":  "Suspender Row",
        "muscle":  "Other",
        "equipment":  "Suspension",
        "media":  "10921201-Suspender-Row-(female)_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-185",
        "name":  "Suspender Squat",
        "workoutName":  "Suspender Squat",
        "muscle":  "Other",
        "equipment":  "Suspension",
        "media":  "11431201-Suspender-Squat-(female)_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-186",
        "name":  "Burpee",
        "workoutName":  "Burpee",
        "muscle":  "Full Body",
        "equipment":  "None",
        "media":  "11601201-Burpee_Cardio.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-187",
        "name":  "Lying Leg Raise",
        "workoutName":  "Lying Leg Raise",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "11631201-Lying-Leg-Raise_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-188",
        "name":  "Smith Calf Raise",
        "workoutName":  "Smith Calf Raise",
        "muscle":  "Calves",
        "equipment":  "Smith Machine",
        "media":  "11641201-Smith-Calf-Raise-(version-2)_Calves.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-189",
        "name":  "Barbell Standing Military Press (Without Rack)",
        "workoutName":  "Barbell Standing Military Press (Without Rack)",
        "muscle":  "Shoulders",
        "equipment":  "Barbell",
        "media":  "11651201-Barbell-Standing-Military-Press-(without-rack)_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-190",
        "name":  "Jump Split M",
        "workoutName":  "Jump Split M",
        "muscle":  "Full Body",
        "equipment":  "None",
        "media":  "11661201-Jump-Split-m_Plyometrics.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-191",
        "name":  "Assisted Weighted Push up",
        "workoutName":  "Assisted Weighted Push up",
        "muscle":  "Chest",
        "equipment":  "None",
        "media":  "11721201-Assisted-Weighted-Push-up_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-192",
        "name":  "Sumo Deadlift High Pull",
        "workoutName":  "Sumo Deadlift High Pull",
        "muscle":  "Shoulders",
        "equipment":  "None",
        "media":  "11991201-Sumo-Deadlift-High-Pull_Thighs_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-193",
        "name":  "Push Press",
        "workoutName":  "Push Press",
        "muscle":  "Shoulders",
        "equipment":  "None",
        "media":  "12001201-Push-Press_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-194",
        "name":  "Cable Horizontal Pallof Press",
        "workoutName":  "Cable Horizontal Pallof Press",
        "muscle":  "Abdominals",
        "equipment":  "Cable",
        "media":  "12021201-Cable-horizontal-Pallof-Press_waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-195",
        "name":  "Cable One Arm Lat Pulldown",
        "workoutName":  "Cable One Arm Lat Pulldown",
        "muscle":  "Upper Back",
        "equipment":  "Cable",
        "media":  "12041201-Cable-one-arm-lat-pulldown_back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-196",
        "name":  "Cable Pull Through",
        "workoutName":  "Cable Pull Through",
        "muscle":  "Glutes",
        "equipment":  "Cable",
        "media":  "12061201-Cable-pull-through_hips.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-197",
        "name":  "Cable Twist (Down Up)",
        "workoutName":  "Cable Twist (Down Up)",
        "muscle":  "Abdominals",
        "equipment":  "Cable",
        "media":  "12071201-Cable-twist-(down-up)_waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-198",
        "name":  "Smith Standing Shoulder Press",
        "workoutName":  "Smith Standing Shoulder Press",
        "muscle":  "Shoulders",
        "equipment":  "Smith Machine",
        "media":  "12241201-Smith-Standing-Shoulder-Press_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-199",
        "name":  "Standing Plate Press",
        "workoutName":  "Standing Plate Press",
        "muscle":  "Other",
        "equipment":  "Plate",
        "media":  "12251201-Standing-Plate-Press_Chest_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-200",
        "name":  "Flutter Kicks",
        "workoutName":  "Flutter Kicks",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "12441201-Flutter-Kicks-(version-3)_Hips.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-201",
        "name":  "Cable Standing up Straight Crossovers",
        "workoutName":  "Cable Standing up Straight Crossovers",
        "muscle":  "Chest",
        "equipment":  "Cable",
        "media":  "12691201-Cable-Standing-Up-Straight-Crossovers_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-202",
        "name":  "Clap Push up",
        "workoutName":  "Clap Push up",
        "muscle":  "Chest",
        "equipment":  "None",
        "media":  "12731201-Clap-Push-Up_Plyometrics_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-203",
        "name":  "Chin Up",
        "workoutName":  "Chin Up",
        "muscle":  "Lats",
        "equipment":  "None",
        "media":  "13261201-Chin-Up_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-204",
        "name":  "Bench Dip on Floor",
        "workoutName":  "Bench Dip on Floor",
        "muscle":  "Triceps",
        "equipment":  "None",
        "media":  "13991201-Bench-dip-on-floor_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-205",
        "name":  "L Sit",
        "workoutName":  "L Sit",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "14021201-L-sit_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-206",
        "name":  "Lever Seated Dip",
        "workoutName":  "Lever Seated Dip",
        "muscle":  "Triceps",
        "equipment":  "Machine",
        "media":  "14511201-Lever-Seated-Dip_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-207",
        "name":  "Lever Seated Shoulder Press",
        "workoutName":  "Lever Seated Shoulder Press",
        "muscle":  "Shoulders",
        "equipment":  "Machine",
        "media":  "14541201-Lever-Seated-Shoulder-Press_Shoulders.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-208",
        "name":  "Dumbbell Romanian Deadlift",
        "workoutName":  "Dumbbell Romanian Deadlift",
        "muscle":  "Glutes",
        "equipment":  "Dumbbell",
        "media":  "14591201-Dumbbell-Romanian-Deadlift_Hips.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-209",
        "name":  "Walking Lunge Male",
        "workoutName":  "Walking Lunge Male",
        "muscle":  "Glutes",
        "equipment":  "None",
        "media":  "14601201-Walking-Lunge-Male_Hips.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-210",
        "name":  "Bent Leg Kickback (Kneeling)",
        "workoutName":  "Bent Leg Kickback (Kneeling)",
        "muscle":  "Glutes",
        "equipment":  "None",
        "media":  "14741201-Bent-Leg-Kickback-(kneeling)_Hips.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-211",
        "name":  "Bent Leg Side Kick (Kneeling)",
        "workoutName":  "Bent Leg Side Kick (Kneeling)",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "14751201-Bent-Leg-Side-Kick-(kneeling)-(female)_Hips-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-212",
        "name":  "Lever Incline Chest Press",
        "workoutName":  "Lever Incline Chest Press",
        "muscle":  "Chest",
        "equipment":  "Machine",
        "media":  "14791201-Lever-Incline-Chest-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-213",
        "name":  "Barbell Clean Pull",
        "workoutName":  "Barbell Clean Pull",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "15171201-Barbell-Clean-Pull_Weightlifts_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-214",
        "name":  "Barbell Hang Clean",
        "workoutName":  "Barbell Hang Clean",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "15201201-Barbell-Hang-Clean_Weightlifts-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-215",
        "name":  "Barbell Hang Snatch Below the Knees",
        "workoutName":  "Barbell Hang Snatch Below the Knees",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "15231201-Barbell-Hang-Snatch-Below-the-Knees_Weightlifts_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-216",
        "name":  "Barbell Power Snatch",
        "workoutName":  "Barbell Power Snatch",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "15301201-Barbell-Power-Snatch_Weightlifts_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-217",
        "name":  "Barbell Split Jerk",
        "workoutName":  "Barbell Split Jerk",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "15381201-Barbell-Split-Jerk_Weightlifts_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-218",
        "name":  "Barbell Full Zercher Squat",
        "workoutName":  "Barbell Full Zercher Squat",
        "muscle":  "Quadriceps",
        "equipment":  "Barbell",
        "media":  "15451201-Barbell-full-Zercher-Squat_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-219",
        "name":  "Dumbbell Walking Lunges",
        "workoutName":  "Dumbbell Walking Lunges",
        "muscle":  "Other",
        "equipment":  "Dumbbell",
        "media":  "15571201-Dumbbell-Walking-Lunges_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-220",
        "name":  "Cable Triceps Pushdown (Sz Bar)",
        "workoutName":  "Cable Triceps Pushdown (Sz Bar)",
        "muscle":  "Triceps",
        "equipment":  "Cable",
        "media":  "16051201-Cable-Triceps-Pushdown-(SZ-bar)_Upper-arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-221",
        "name":  "Cable Overhead Curl",
        "workoutName":  "Cable Overhead Curl",
        "muscle":  "Biceps",
        "equipment":  "Cable",
        "media":  "16361201-Cable-Overhead-Curl_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-222",
        "name":  "Dumbbell Cross Body Hammer Curl",
        "workoutName":  "Dumbbell Cross Body Hammer Curl",
        "muscle":  "Biceps",
        "equipment":  "Dumbbell",
        "media":  "16571201-Dumbbell-Cross-Body-Hammer-Curl-(Version-2)_Upper-Arms-FIX.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-223",
        "name":  "Cable Squat Row (With Rope Attachment)",
        "workoutName":  "Cable Squat Row (With Rope Attachment)",
        "muscle":  "Quadriceps",
        "equipment":  "Cable",
        "media":  "17171201-Cable-Squat-Row-(with-rope-attachment)_Back_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-224",
        "name":  "Weighted Tricep Dips",
        "workoutName":  "Weighted Tricep Dips",
        "muscle":  "Triceps",
        "equipment":  "None",
        "media":  "17551201-Weighted-Tricep-Dips_Upper-Arms_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-225",
        "name":  "Barbell Single Leg Deadlift",
        "workoutName":  "Barbell Single Leg Deadlift",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "17561201-Barbell-Single-Leg-Deadlift_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-226",
        "name":  "Single Leg Squat (Pistol)",
        "workoutName":  "Single Leg Squat (Pistol)",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "17591201-Single-Leg-Squat-(pistol)-(male)_Thighs-FIX2_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-227",
        "name":  "Hanging Leg Hip Raise",
        "workoutName":  "Hanging Leg Hip Raise",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "17641201-Hanging-Leg-Hip-Raise_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-228",
        "name":  "Hyperextension",
        "workoutName":  "Hyperextension",
        "muscle":  "Glutes",
        "equipment":  "None",
        "media":  "18601201-Hyperextension-(VERSION-2)_Hips.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-229",
        "name":  "Lever Triceps Dip (Plate Loaded)",
        "workoutName":  "Lever Triceps Dip (Plate Loaded)",
        "muscle":  "Triceps",
        "equipment":  "Machine",
        "media":  "18711201-Lever-Triceps-Dip-(plate-loaded)_Upper-Arms-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-230",
        "name":  "Single Leg",
        "workoutName":  "Single Leg",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "20711201-Single-Leg _Hip-Thrusts_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-231",
        "name":  "Captains Chair Leg Raise",
        "workoutName":  "Captains Chair Leg Raise",
        "muscle":  "Glutes",
        "equipment":  "None",
        "media":  "21261201-Captains-chair-leg-raise_Hips.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-232",
        "name":  "Weighted Decline Crunch",
        "workoutName":  "Weighted Decline Crunch",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "21301201-Weighted-decline-crunch_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-233",
        "name":  "Farmers Walk",
        "workoutName":  "Farmers Walk",
        "muscle":  "Full Body",
        "equipment":  "None",
        "media":  "21331201-Farmers-walk_Cardio.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-234",
        "name":  "Elliptical Machine Walk",
        "workoutName":  "Elliptical Machine Walk",
        "muscle":  "Cardio",
        "equipment":  "Machine",
        "media":  "21921201-Elliptical-Machine-Walk_Cardio.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-235",
        "name":  "Run on Treadmill",
        "workoutName":  "Run on Treadmill",
        "muscle":  "Cardio",
        "equipment":  "Machine",
        "media":  "21971201-Run-on-Treadmill-(female)_Cardio.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-236",
        "name":  "Barbell Rear Lunge",
        "workoutName":  "Barbell Rear Lunge",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "22261201-Barbell-Rear-Lunge-(female)_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-237",
        "name":  "Dumbbell Lying Triceps Extension",
        "workoutName":  "Dumbbell Lying Triceps Extension",
        "muscle":  "Triceps",
        "equipment":  "Dumbbell",
        "media":  "22511201-Dumbbell-Lying-Triceps-Extension-(female)_Upper-Arms_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-238",
        "name":  "Lever Seated Row",
        "workoutName":  "Lever Seated Row",
        "muscle":  "Upper Back",
        "equipment":  "Machine",
        "media":  "22651201-Lever-Seated-Row-(version-2)_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-239",
        "name":  "Rowing Straight Back (With Rowing Machine)",
        "workoutName":  "Rowing Straight Back (With Rowing Machine)",
        "muscle":  "Cardio",
        "equipment":  "Machine",
        "media":  "22701201-Rowing-Straight-Back-(with-rowing-machine)-(female)_Cardio.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-240",
        "name":  "Stationary Bike Run",
        "workoutName":  "Stationary Bike Run",
        "muscle":  "Cardio",
        "equipment":  "Machine",
        "media":  "22791201-Stationary-Bike-Run-(version-4)_Cardio.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-241",
        "name":  "Dumbbell Goblet Squat",
        "workoutName":  "Dumbbell Goblet Squat",
        "muscle":  "Quadriceps",
        "equipment":  "Dumbbell",
        "media":  "22811201-Dumbbell-Goblet-Squat-(female)_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-242",
        "name":  "Dumbbell Bulgarian Split Squat",
        "workoutName":  "Dumbbell Bulgarian Split Squat",
        "muscle":  "Quadriceps",
        "equipment":  "Dumbbell",
        "media":  "22901201-Dumbbell-Bulgarian-Split-Squat-(female)_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-243",
        "name":  "Lying Elbow to Knee",
        "workoutName":  "Lying Elbow to Knee",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "23121201-Lying-Elbow-to-Knee_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-244",
        "name":  "Lever Rotary Calf",
        "workoutName":  "Lever Rotary Calf",
        "muscle":  "Calves",
        "equipment":  "Machine",
        "media":  "23151201-Lever-Rotary-Calf_Calves.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-245",
        "name":  "Dumbbell Sumo Squat",
        "workoutName":  "Dumbbell Sumo Squat",
        "muscle":  "Other",
        "equipment":  "Dumbbell",
        "media":  "23221201-Dumbbell-Sumo-Squat-(female)_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-246",
        "name":  "Kettlebell Goblet Squat",
        "workoutName":  "Kettlebell Goblet Squat",
        "muscle":  "Quadriceps",
        "equipment":  "Kettlebell",
        "media":  "23561201-Kettlebell-Goblet-Squat-(female)_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-247",
        "name":  "Weighted Russian Twist",
        "workoutName":  "Weighted Russian Twist",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "23711201-Weighted-Russian-Twist_Waist.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-248",
        "name":  "Single Leg Squat with Support",
        "workoutName":  "Single Leg Squat with Support",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "23751201-Single-Leg-Squat-with-Support-(female)_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-249",
        "name":  "Cable Pushdown (With Rope Attachment)",
        "workoutName":  "Cable Pushdown (With Rope Attachment)",
        "muscle":  "Triceps",
        "equipment":  "Cable",
        "media":  "24381201-Cable-Pushdown-(with-rope-attachment)-(female)_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-250",
        "name":  "Resistance Band Lateral Walk",
        "workoutName":  "Resistance Band Lateral Walk",
        "muscle":  "Other",
        "equipment":  "Resistance Band",
        "media":  "24601201-Resistance-Band-Lateral-Walk-(female)_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-251",
        "name":  "Dumbbell Seated Palms up Wrist Curl",
        "workoutName":  "Dumbbell Seated Palms up Wrist Curl",
        "muscle":  "Forearms",
        "equipment":  "Dumbbell",
        "media":  "26331201-Dumbbell-Seated-Palms-Up-Wrist-Curl-(female)_Forea.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-252",
        "name":  "Cable Seated Row with V Bar",
        "workoutName":  "Cable Seated Row with V Bar",
        "muscle":  "Upper Back",
        "equipment":  "Cable",
        "media":  "26611201-Cable-Seated-Row-with-V-bar_Back (1).mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-253",
        "name":  "Cable Seated Row with V Bar",
        "workoutName":  "Cable Seated Row with V Bar",
        "muscle":  "Upper Back",
        "equipment":  "Cable",
        "media":  "26611201-Cable-Seated-Row-with-V-bar_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-254",
        "name":  "Pike Push up",
        "workoutName":  "Pike Push up",
        "muscle":  "Chest",
        "equipment":  "None",
        "media":  "29211201-Pike-Push-up_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-255",
        "name":  "Kettlebell Around Head Rotation",
        "workoutName":  "Kettlebell Around Head Rotation",
        "muscle":  "Upper Back",
        "equipment":  "Kettlebell",
        "media":  "29391201-Kettlebell-Around-Head-Rotation_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-256",
        "name":  "Lever Belt Squat",
        "workoutName":  "Lever Belt Squat",
        "muscle":  "Other",
        "equipment":  "Machine",
        "media":  "29501201-Lever-Belt-Squat_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-257",
        "name":  "Dumbbell Split Squat",
        "workoutName":  "Dumbbell Split Squat",
        "muscle":  "Quadriceps",
        "equipment":  "Dumbbell",
        "media":  "29601201-Dumbbell-Split-Squat_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-258",
        "name":  "Captains Chair Straight Leg Raise",
        "workoutName":  "Captains Chair Straight Leg Raise",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "29631201-Captains-Chair-Straight-Leg-Raise_Waist-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-259",
        "name":  "Side Lunge",
        "workoutName":  "Side Lunge",
        "muscle":  "Quadriceps",
        "equipment":  "None",
        "media":  "29721201-Side-Lunge_Thighs.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-260",
        "name":  "Landmine Squat and Press",
        "workoutName":  "Landmine Squat and Press",
        "muscle":  "Full Body",
        "equipment":  "None",
        "media":  "29761201-Landmine-Squat-and-Press_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-261",
        "name":  "Elbow up and Down Dynamic Plank",
        "workoutName":  "Elbow up and Down Dynamic Plank",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "29781201-Elbow-Up-and-Down-Dynamic-Plank.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-262",
        "name":  "Dumbbell Renegade Row",
        "workoutName":  "Dumbbell Renegade Row",
        "muscle":  "Other",
        "equipment":  "Dumbbell",
        "media":  "29811201-Dumbbell-Renegade-Row-(female)_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-263",
        "name":  "Barbell Pendlay Row",
        "workoutName":  "Barbell Pendlay Row",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "30171201-Barbell-Pendlay-Row_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-264",
        "name":  "High Knee Skips",
        "workoutName":  "High Knee Skips",
        "muscle":  "Full Body",
        "equipment":  "None",
        "media":  "30911201-High-Knee-Skips-(male)_Cardio-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-265",
        "name":  "Jumping Jack",
        "workoutName":  "Jumping Jack",
        "muscle":  "Full Body",
        "equipment":  "None",
        "media":  "30941201-Jumping-Jack-(male)_Cardio.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-266",
        "name":  "Banded Back Underhand Pulldown",
        "workoutName":  "Banded Back Underhand Pulldown",
        "muscle":  "Other",
        "equipment":  "Resistance Band",
        "media":  "31161201-Band-Fixed-Back-Underhand-Pulldown_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-267",
        "name":  "Lever Bent Over Row with V Bar (Plate Loaded)",
        "workoutName":  "Lever Bent Over Row with V Bar (Plate Loaded)",
        "muscle":  "Upper Back",
        "equipment":  "Machine",
        "media":  "32001201-Lever-Bent-over-Row-with-V-bar-(plate-loaded)_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-268",
        "name":  "Kneeling Push Up",
        "workoutName":  "Kneeling Push Up",
        "muscle":  "Chest",
        "equipment":  "None",
        "media":  "32111201-Kneeling-Push-up-(male)_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-269",
        "name":  "Handstand",
        "workoutName":  "Handstand",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "33021201-Handstand_Upper-arms_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-270",
        "name":  "Barbell Thruster",
        "workoutName":  "Barbell Thruster",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "33051201-Barbell-Thruster_Weightlifting_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-271",
        "name":  "Dumbbell Incline Y Raise",
        "workoutName":  "Dumbbell Incline Y Raise",
        "muscle":  "Other",
        "equipment":  "Dumbbell",
        "media":  "35411201-Dumbbell-Incline-Y-Raise_Shoulders_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-272",
        "name":  "Dumbbell Lying on Floor Chest Press",
        "workoutName":  "Dumbbell Lying on Floor Chest Press",
        "muscle":  "Chest",
        "equipment":  "Dumbbell",
        "media":  "36681201-Dumbbell-Lying-on-Floor-Chest-Press_Chest.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-273",
        "name":  "Dumbbell Squeeze Bench Press",
        "workoutName":  "Dumbbell Squeeze Bench Press",
        "muscle":  "Other",
        "equipment":  "Dumbbell",
        "media":  "36811201-Dumbbell-Squeeze-Bench-Press_Chest-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-274",
        "name":  "Barbell Floor Chest Press",
        "workoutName":  "Barbell Floor Chest Press",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "37241201-Barbell-Floor-Chest-Press_Chest_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-275",
        "name":  "Incline Push up (On Box)",
        "workoutName":  "Incline Push up (On Box)",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "37851201-Incline-Push-Up-(on-box).mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-276",
        "name":  "Band Assisted Pull up",
        "workoutName":  "Band Assisted Pull up",
        "muscle":  "Upper Back",
        "equipment":  "Resistance Band",
        "media":  "38441201-Band-Assisted-Pull-Up-(VERSION-3)-(female)_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-277",
        "name":  "Cable Seated Chest Fly",
        "workoutName":  "Cable Seated Chest Fly",
        "muscle":  "Other",
        "equipment":  "Cable",
        "media":  "38691201-Cable-Seated-Chest-Fly_Chest_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-278",
        "name":  "Jack Knife Sit up",
        "workoutName":  "Jack Knife Sit up",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "38841201-Jack-knife-Sit-up-(female)_Waist_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-279",
        "name":  "Dumbbell One Arm Snatch",
        "workoutName":  "Dumbbell One Arm Snatch",
        "muscle":  "Other",
        "equipment":  "Dumbbell",
        "media":  "38881201-Dumbbell-One-Arm-Snatch_Weightlifting_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-280",
        "name":  "Band Bent Over Row",
        "workoutName":  "Band Bent Over Row",
        "muscle":  "Upper Back",
        "equipment":  "Resistance Band",
        "media":  "38991201-Band-bent-over-row-(male)_Back.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-281",
        "name":  "Dumbbell Single Leg Calf Raise",
        "workoutName":  "Dumbbell Single Leg Calf Raise",
        "muscle":  "Calves",
        "equipment":  "Dumbbell",
        "media":  "39731201-Dumbbell-Single-Leg-Calf-Raise-(female)-(VERSION-2)_Calves.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-282",
        "name":  "Landmine One Arm Bent Over Row",
        "workoutName":  "Landmine One Arm Bent Over Row",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "40381201-Landmine-One-Arm-Bent-Over-Row_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-283",
        "name":  "Leg Raise Dragon Flag",
        "workoutName":  "Leg Raise Dragon Flag",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "40581201-Leg-Raise-Dragon-Flag_Waist_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-284",
        "name":  "Weighted Hang Chin up",
        "workoutName":  "Weighted Hang Chin up",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "41811201-Weighted-Hang-Chin-Up_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-285",
        "name":  "Lever Low Row (Plate Loaded)",
        "workoutName":  "Lever Low Row (Plate Loaded)",
        "muscle":  "Other",
        "equipment":  "Machine",
        "media":  "42141201-Lever-Low-Row-(plate-loaded)_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-286",
        "name":  "Band Knelling Lat Pulldown",
        "workoutName":  "Band Knelling Lat Pulldown",
        "muscle":  "Other",
        "equipment":  "Resistance Band",
        "media":  "43581201-Band-Knelling-Lat-Pulldown_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-287",
        "name":  "Lever Reverse Grip High Row (Plate Loaded)",
        "workoutName":  "Lever Reverse Grip High Row (Plate Loaded)",
        "muscle":  "Other",
        "equipment":  "Machine",
        "media":  "43781201-Lever-Reverse-Grip-High-Row-(plate-loaded)_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-288",
        "name":  "Kettlebell Single Arm Clean",
        "workoutName":  "Kettlebell Single Arm Clean",
        "muscle":  "Other",
        "equipment":  "Kettlebell",
        "media":  "45301201-Kettlebell-Single-Arm-Clean-(female)_Weightlifts_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-289",
        "name":  "Kettlebell Standing Slingshots",
        "workoutName":  "Kettlebell Standing Slingshots",
        "muscle":  "Other",
        "equipment":  "Kettlebell",
        "media":  "45341201-Kettlebell-Standing-Slingshots-(female)_Shoulders_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-290",
        "name":  "Cable Neutral Grip Kickback",
        "workoutName":  "Cable Neutral Grip Kickback",
        "muscle":  "Other",
        "equipment":  "Cable",
        "media":  "45661201-Cable-Neutral-Grip-Kickback_Upper-arms_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-291",
        "name":  "Resistance Band Pull Apart",
        "workoutName":  "Resistance Band Pull Apart",
        "muscle":  "Other",
        "equipment":  "Resistance Band",
        "media":  "45681201-Resistance-Band-Pull-Apart_Shoulders_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-292",
        "name":  "Band Standing Hammer Curl",
        "workoutName":  "Band Standing Hammer Curl",
        "muscle":  "Biceps",
        "equipment":  "Resistance Band",
        "media":  "46191201-Band-Standing-Hammer-Curl_Upper-Arms.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-293",
        "name":  "Dumbbell Sit up",
        "workoutName":  "Dumbbell Sit up",
        "muscle":  "Other",
        "equipment":  "Dumbbell",
        "media":  "47561201-Dumbbell-Sit-up_Waist_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-294",
        "name":  "Pull up (Negative)",
        "workoutName":  "Pull up (Negative)",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "47741201-Pull-up-(negative)-(female)_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-295",
        "name":  "Cable Unilateral Bicep Curl",
        "workoutName":  "Cable Unilateral Bicep Curl",
        "muscle":  "Biceps",
        "equipment":  "Cable",
        "media":  "48381201-Cable-Unilateral-Bicep-Curl_Upper-Arms_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-296",
        "name":  "Spiderman Plank",
        "workoutName":  "Spiderman Plank",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "48791201-Spiderman-Plank_Waist_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-297",
        "name":  "Barbell Box Squat",
        "workoutName":  "Barbell Box Squat",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "49621201-Barbell-Box-Squat_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-298",
        "name":  "Jump Shrug",
        "workoutName":  "Jump Shrug",
        "muscle":  "Full Body",
        "equipment":  "None",
        "media":  "49641201-Jump-Shrug_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-299",
        "name":  "Barbell Pause Full Squat",
        "workoutName":  "Barbell Pause Full Squat",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "50161201-Barbell-Pause-Full-Squat_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-300",
        "name":  "Cable Single Arm Triceps Pushdown (Rope Attachment",
        "workoutName":  "Cable Single Arm Triceps Pushdown (Rope Attachment",
        "muscle":  "Triceps",
        "equipment":  "Cable",
        "media":  "50331201-Cable-Single-Arm-Triceps-Pushdown-(rope-attachment.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-301",
        "name":  "Single Leg Calf Raise Off Step",
        "workoutName":  "Single Leg Calf Raise Off Step",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "50521201-Single-Leg-Calf-Raise-Off-Step_Calves_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-302",
        "name":  "Dumbbell Overhead Lunge",
        "workoutName":  "Dumbbell Overhead Lunge",
        "muscle":  "Other",
        "equipment":  "Dumbbell",
        "media":  "50761201-Dumbbell-Overhead-Lunge_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-303",
        "name":  "Landmine Single Arm Press",
        "workoutName":  "Landmine Single Arm Press",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "50941201-Landmine-Single-Arm-Press_Shoulders_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-304",
        "name":  "Bird Dog",
        "workoutName":  "Bird Dog",
        "muscle":  "Glutes",
        "equipment":  "None",
        "media":  "51821201-Bird-Dog-(VERSION-2)-(female)_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-305",
        "name":  "Bodyweight Muscle up",
        "workoutName":  "Bodyweight Muscle up",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "51941201-Bodyweight-Muscle-Up-(VERSION-2)_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-306",
        "name":  "Dumbbell Waiter Biceps Curl",
        "workoutName":  "Dumbbell Waiter Biceps Curl",
        "muscle":  "Biceps",
        "equipment":  "Dumbbell",
        "media":  "52011201-Dumbbell-Waiter-Biceps-Curl_Upper-Arms_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-307",
        "name":  "Downward Facing Dog",
        "workoutName":  "Downward Facing Dog",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "52511201-Downward-Facing-Dog-(female)_Stretching_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-308",
        "name":  "Lying Toe Touch",
        "workoutName":  "Lying Toe Touch",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "52751201-Lying-Toe-Touch_Waist_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-309",
        "name":  "Barbell Kas Glute Bridge",
        "workoutName":  "Barbell Kas Glute Bridge",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "54511201-Barbell-KAS-Glute-Bridge-(female)_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-310",
        "name":  "Hollow Rock",
        "workoutName":  "Hollow Rock",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "56491201-Hollow-Rock-(male)_Waist_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-311",
        "name":  "Suspension Fly",
        "workoutName":  "Suspension Fly",
        "muscle":  "Other",
        "equipment":  "Suspension",
        "media":  "57371201-Suspension-Fly_Chest-FIX_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-312",
        "name":  "Smith Hip Thrust",
        "workoutName":  "Smith Hip Thrust",
        "muscle":  "Other",
        "equipment":  "Smith Machine",
        "media":  "57611201-Smith-Hip-Thrust-(female)_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-313",
        "name":  "Weighted Hyperextension",
        "workoutName":  "Weighted Hyperextension",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "57821201-Weighted-Hyperextension-(female)_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-314",
        "name":  "Dumbbell Step Up",
        "workoutName":  "Dumbbell Step Up",
        "muscle":  "Quadriceps",
        "equipment":  "Dumbbell",
        "media":  "58261201-Dumbbell-Step-up-(VERSION-2)-(male)_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-315",
        "name":  "Single Leg Bridge with Outstretched Leg (Left) (Ma",
        "workoutName":  "Single Leg Bridge with Outstretched Leg (Left) (Ma",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "60001201-Single-Leg-Bridge-with-Outstretched-Leg-(left)-(ma.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-316",
        "name":  "Cable Donkey Kickback",
        "workoutName":  "Cable Donkey Kickback",
        "muscle":  "Other",
        "equipment":  "Cable",
        "media":  "60401201-Cable-Donkey-Kickback-(male)_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-317",
        "name":  "Dumbbell Frog Hip Thrust",
        "workoutName":  "Dumbbell Frog Hip Thrust",
        "muscle":  "Other",
        "equipment":  "Dumbbell",
        "media":  "61601201-Dumbbell-Frog-Hip-Thrust-(male)_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-318",
        "name":  "Lying Scissors Cross",
        "workoutName":  "Lying Scissors Cross",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "62141201-Lying-Scissors-Cross-(male)_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-319",
        "name":  "Cable Standing Single Arm Fly",
        "workoutName":  "Cable Standing Single Arm Fly",
        "muscle":  "Other",
        "equipment":  "Cable",
        "media":  "62191201-Cable-Standing-Single-Arm-Fly_Chest_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-320",
        "name":  "Barbell Larsen Press",
        "workoutName":  "Barbell Larsen Press",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "62701201-Barbell-Larsen-Press-(male)_Chest_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-321",
        "name":  "Ez Barbell Standing Back Wrist Curl",
        "workoutName":  "Ez Barbell Standing Back Wrist Curl",
        "muscle":  "Forearms",
        "equipment":  "Barbell",
        "media":  "63651201-EZ-Barbell-Standing-Back-Wrist-Curl_Forearms_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-322",
        "name":  "Bodyweight Reverse Lunge",
        "workoutName":  "Bodyweight Reverse Lunge",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "63881201-Bodyweight-Reverse-Lunge-(female)_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-323",
        "name":  "Cable Lateral Pulldown with Mag Grip",
        "workoutName":  "Cable Lateral Pulldown with Mag Grip",
        "muscle":  "Other",
        "equipment":  "Cable",
        "media":  "63921201-Cable-Lateral-Pulldown-with-Mag-Grip_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-324",
        "name":  "Weighted Plate Lying Crunch",
        "workoutName":  "Weighted Plate Lying Crunch",
        "muscle":  "Other",
        "equipment":  "Plate",
        "media":  "66031201-Weighted-Plate-Lying-Crunch-(male)_Waist_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-325",
        "name":  "Sit (Wall)",
        "workoutName":  "Sit (Wall)",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "66961201-Sit-(wall)-(female)_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-326",
        "name":  "Weighted Plate Standing Biceps Curl",
        "workoutName":  "Weighted Plate Standing Biceps Curl",
        "muscle":  "Biceps",
        "equipment":  "Plate",
        "media":  "66981201-Weighted-Plate-Standing-Biceps-Curl-(male)_Forearm.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-327",
        "name":  "Barbell Incline Shoulders Press (Inside Squat Cage",
        "workoutName":  "Barbell Incline Shoulders Press (Inside Squat Cage",
        "muscle":  "Other",
        "equipment":  "Barbell",
        "media":  "68771201-Barbell-Incline-Shoulders-Press-(inside-squat-cage.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-328",
        "name":  "Side Step Deep Squat",
        "workoutName":  "Side Step Deep Squat",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "69241201-Side-Step-Deep-Squat-(male)_Plyometrics_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-329",
        "name":  "Kettlebell Biceps Curl",
        "workoutName":  "Kettlebell Biceps Curl",
        "muscle":  "Biceps",
        "equipment":  "Kettlebell",
        "media":  "69331201-Kettlebell-Biceps-Curl-(female)_Upper-Arms_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-330",
        "name":  "Lever Seated Leg Extension",
        "workoutName":  "Lever Seated Leg Extension",
        "muscle":  "Other",
        "equipment":  "Machine",
        "media":  "71081201-Lever-Seated-Leg-Extension-(VERSION-2)_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-331",
        "name":  "Jump Box",
        "workoutName":  "Jump Box",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "71591201-Jump-Box-(female)_Plyometrics_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-332",
        "name":  "Kettlebell Gorilla Row",
        "workoutName":  "Kettlebell Gorilla Row",
        "muscle":  "Other",
        "equipment":  "Kettlebell",
        "media":  "72301201-Kettlebell-Gorilla-Row-(male)_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-333",
        "name":  "Hanging Front Lever Raise",
        "workoutName":  "Hanging Front Lever Raise",
        "muscle":  "(1)",
        "equipment":  "Machine",
        "media":  "72511201-Hanging-Front-Lever-Raise-(male)_Waist_ (1).mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-334",
        "name":  "Hanging Front Lever Raise",
        "workoutName":  "Hanging Front Lever Raise",
        "muscle":  "Other",
        "equipment":  "Machine",
        "media":  "72511201-Hanging-Front-Lever-Raise-(male)_Waist_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-335",
        "name":  "Plank Alternate Knee Tuck",
        "workoutName":  "Plank Alternate Knee Tuck",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "75311201-Plank-Alternate-Knee-Tuck-(female)_Waist_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-336",
        "name":  "Medicine Ball Slam",
        "workoutName":  "Medicine Ball Slam",
        "muscle":  "Other",
        "equipment":  "Medicine Ball",
        "media":  "75351201-Medicine-Ball-Slam-(VERSION-2)-(male)_Waist_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-337",
        "name":  "Cable Split Stance Single Arm Row",
        "workoutName":  "Cable Split Stance Single Arm Row",
        "muscle":  "Other",
        "equipment":  "Cable",
        "media":  "75641201-Cable-Split-Stance-Single-Arm-Row-(male)_Back_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-338",
        "name":  "Cable Standing Supinated Face Pull (With Rope)",
        "workoutName":  "Cable Standing Supinated Face Pull (With Rope)",
        "muscle":  "Sho",
        "equipment":  "Cable",
        "media":  "77441201-Cable-Standing-Supinated-Face-Pull-(with-rope)_Sho.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-339",
        "name":  "Dead Bug",
        "workoutName":  "Dead Bug",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "78391201-Dead-Bug-(VERSION-3)-(female)_Waist_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-340",
        "name":  "Glute Bridge From Bench",
        "workoutName":  "Glute Bridge From Bench",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "80151201-Glute-Bridge-from-Bench-(male)_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-341",
        "name":  "Dumbbell Single Leg Hip Thrust",
        "workoutName":  "Dumbbell Single Leg Hip Thrust",
        "muscle":  "Other",
        "equipment":  "Dumbbell",
        "media":  "80751201-Dumbbell-Single-Leg-Hip-Thrust_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-342",
        "name":  "Lying Knee Raise",
        "workoutName":  "Lying Knee Raise",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "81941201-Lying-Knee-Raise-(male)_Waist_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-343",
        "name":  "Standing Single Side Leg Raise Chair Supported (Fe",
        "workoutName":  "Standing Single Side Leg Raise Chair Supported (Fe",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "86421201-Standing-Single-Side-Leg-Raise-Chair-Supported-(fe.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-344",
        "name":  "Step up on Box",
        "workoutName":  "Step up on Box",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "94901201-Step-Up-on-Box_Thighs_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-345",
        "name":  "Dumbbell Single Leg Romanian Deadlift Leg Raise (M",
        "workoutName":  "Dumbbell Single Leg Romanian Deadlift Leg Raise (M",
        "muscle":  "Other",
        "equipment":  "Dumbbell",
        "media":  "97541201-Dumbbell-Single-Leg-Romanian-Deadlift-Leg-Raise-(m.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-346",
        "name":  "Hanging Knee Raise",
        "workoutName":  "Hanging Knee Raise",
        "muscle":  "Abdominals",
        "equipment":  "None",
        "media":  "98191201-Hanging-Knee-Raise-(male)_Waist_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-347",
        "name":  "Side Plank Clamshell",
        "workoutName":  "Side Plank Clamshell",
        "muscle":  "Other",
        "equipment":  "None",
        "media":  "98491201-Side-Plank-Clamshell-(male)_Hips_.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-348",
        "name":  "Cable 45 Degrees Single Arm Reverse Fly",
        "workoutName":  "Cable 45 Degrees Single Arm Reverse Fly",
        "muscle":  "Sho",
        "equipment":  "Cable",
        "media":  "98681201-Cable-45-degrees-Single-Arm-Reverse-Fly-(male)_Sho.mp4",
        "mediaType":  "video"
    },
    {
        "id":  "video-349",
        "name":  "Kettlebell Single Arm Shoulder Press",
        "workoutName":  "Kettlebell Single Arm Shoulder Press",
        "muscle":  "Should",
        "equipment":  "Kettlebell",
        "media":  "99571201-Kettlebell-Single-Arm-Shoulder-Press-(male)_Should.mp4",
        "mediaType":  "video"
    }
];
