// async function fetchData() {
//   const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
//   const record=await res.json();
//   document.getElementById("date").innerHTML=record.data[0].date;
//   document.getElementById("areaName").innerHTML=record.data[0].areaName;
//   document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
//   document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
// }
// fetchData();

// Theme
// Verses

const array = [
    { theme: "The Definition of Yoga",
      verse: "I.1 I will now review for you how we become whole."},
    { theme: "Mistaken Perception",
      verse: "I.2 We become whole by stopping how the mind turns."},
    { theme: "The Five Modes of the Mind Throughout the Day",
      verse: "I.5 The mind turns in five different ways. They can be involved with afflictions or free of them. \n I.6 They are correct perceptions, mistaken perceptions, imagination, sleep, and memories."},
    { theme: "Preparing for the Steps on the Path",
      verse: "I.14 You must cultivate your practice over an extended period of time; it must be steady, without gaps, and it must be done correctly – for then a firm foundation is laid."},
    { theme: "The First Path: The Path of Accumulation",
      verse: "I.15 Giving up your attachments consists of the decision to gain control over your craving for experiences, seen or only heard of."},
    { theme: "The Second Path: The Path of Preparation",
      verse: "I.20 The other ones must first use belief, effort, awareness, meditation, and wisdom."},
    { theme: "How to Practice",
      verse: "I.21 The goal is reached by those who act with intense dedication and urgency."},
    { theme: "Finding a Teacher",
      verse: "I.24 A master is an extraordinary person who is untouched by mental afflictions, by deeds, their ripening, and their storing."},
    { theme: "Obstacles",
      verse: "I.30 Obstacles occur when the mind is distracted; and this can be caused by illness, fogginess of the mind, having doubts, carelessness, laziness, mistaken views of the world which are left uncorrected, failing to reach specific levels, or not being established in them firmly."},
    { theme: "The Antidote to Obstacles: The Four Infinite Thoughts",
      verse: "I.32 And if you wish to stop these obstacles, there is one, and only one, crucial practice for doing so. \nI.33 You must use kindness, compassion, joy, and equinimity. Learn to keep your feelings in balance, whether something feels good, or whether it hurts; whether something is enjoyable, or distasteful. This practice makes the mind bright and clear as pure water."},
    { theme: "The Benefits of the Four Infinite Thoughts (Part 1)",
      verse: "I.34 It gives the same effect as releasing, then storing, the wind of the breath.\nI.35 It also helps us control the tendency that we have, of thoughts contastantly arising about outer objects of experience.\nI.36 It also makes your heart carefree, and radiant like starlight."},
    { theme: "The Benefits of the Four Infinite Thoughts (Part 2)",
      verse: "I.37 And it frees your mind from wanting things.\nI.38 It moreover enables you to be conscious in your dreamlife, as you sleep.\nI.39 It brings you to the same exhilaration as deep meditation does.\nI.40 You gain mastery over the tiniest atoms, and galaxies as well."},
    { theme: "The Third Path: The Path of Seeing (Part 1)",
      verse: "I.41 Those extraordinary people who shatter the way the mind turns things around use a balanced meditation, which is fixed and clear on its object. And this object is like a crystal, with the one that holds it, and what it holds, and the holding itself as well."},
    { theme: "The Third Path: The Path of Seeing (Part 2)",
      verse: "I.42 Then you grasp this with images, mixing up the world and the object, then that is the type of balanced meditation which uses concepts."},
    { theme: "The Third Path: The Path of Seeing (Part 3)",
      verse: "I.43 Stay in that one pure thought, and never forget it; that single most important thing: things are empty of being what they are by themselves. This is the clear light, beyond all conceptual thought."},
    { theme: "The Fourth Path: The Path of Habituation (Part 1)",
      verse: "I.44 The distinction between what we refer to as being “involved with examining” or “not being involved with examining,” moreover, has to do with the relative subtlety of the object.\nI.45 That object which is subtle to the ultimate is the one where there are no signs."},
    { theme: "The Fourth Path: The Path of Habituation (Part 2)",
      verse: "I.46 And this is still what is called “deep meditation where we still have the seeds.”"},
    { theme: "The Fifth Path: The Path of No More Learning (Part 1)",
      verse: "I.47 When you gain the fearlessness of going beyond all examining, you reach inner bliss."},
    { theme: "The Fifth Path: The Path of No More Learning (Part 2)",
      verse: "I.48 At that point, wisdom becomes vast and awakened.\ni.49 you experience a completely different object than with the wisdoms of hearing and reasoning, because what you see is far beyond."},
    ];

    document.addEventListener('DOMContentLoaded', () => {
      const randomizer = Math.floor(Math.random() * array.length);
      document.getElementById('theme').textContent = array[randomizer].theme;
      document.getElementById('verse').textContent = array[randomizer].verse;
  });

