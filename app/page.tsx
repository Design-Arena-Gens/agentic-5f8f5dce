import { HeatWaveSound } from "./components/HeatWaveSound";
import { MangoOrbit } from "./components/MangoOrbit";
import { ScenePanel, type Scene } from "./components/ScenePanel";
import { TrainWindow } from "./components/TrainWindow";
import styles from "./page.module.css";

const baseScenes = [
  {
    id: 1,
    title: "रेलवे स्टेशन की तपिश",
    subtitle: "गर्मी की दोपहर, धूप और धुआँ",
    narration:
      "दिन चढ़ चुका था और स्टेशन की पटरी से तपती हवा उठ रही थी। आम वाला अपनी टोकरी सँभाले बैठा था। पास ही खड़ी ट्रेन में पुलिस वाला ड्यूटी के लिए तैयार हो रहा था।"
  },
  {
    id: 2,
    title: "हवा का शरारती झोंका",
    subtitle: "एक क्षण की अफरातफरी",
    narration:
      "ट्रेन हिली ही थी कि खिड़की से झाँकते पुलिस वाले का लंच बॉक्स तेज़ झोंके से छिटककर पटरी पर जा गिरा। पल भर में चेहरे पर घबराहट नज़र आई—'अरे! मेरा खाना तो गया!'"
  },
  {
    id: 3,
    title: "मीठा समाधान",
    subtitle: "आम वाला हमेशा तैयार",
    narration:
      "आम वाले ने मुस्कराकर कहा, 'साहब, चिंता मत कीजिए। लीजिए सबसे मीठा आम, यही गर्मी में असली लंच है।' पुलिस वाले की मुस्कान लौट आई—'तुमने तो मेरी समस्या ही हल कर दी!'"
  },
  {
    id: 4,
    title: "दोस्ती की सीटी",
    subtitle: "फिर मिलेंगे, आम के राजा!",
    narration:
      "जैसे ही ट्रेन सीटी मारकर आगे बढ़ी, पुलिस वाला हाथ हिलाकर बोला—'अगली बार फिर मिलेंगे!' आम वाला हँसते हुए चिल्लाया—'ज़रूर साहब, आपका स्टेशन पर स्वागत रहेगा!'"
  }
] satisfies Array<Omit<Scene, "backdrop">>;

const backdrops: Scene["backdrop"][] = ["station", "gust", "mango", "goodbye"];

const scenes: Scene[] = baseScenes.map((scene, index) => ({
  ...scene,
  backdrop: backdrops[index % backdrops.length]
}));

export default function Page() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.tag}>AI CARTOON कथा</p>
          <h1>
            गर्मी में{" "}
            <span className={styles.highlight}>
              आम का <span>मीठा</span> समाधान
            </span>
          </h1>
          <p className={styles.lead}>
            लंच बॉक्स के गिरते ही घबराहट छा गई थी, लेकिन स्टेशन पर तैयार बैठा आम वाला दोस्ती और मिठास से गर्मी को मात देने वाला नायक बन गया।
          </p>
          <div className={styles.actions}>
            <HeatWaveSound />
            <a className={styles.cta} href="#story">
              कहानी देखिए
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <TrainWindow />
          <div className={styles.mangoOrbit}>
            <MangoOrbit />
          </div>
        </div>
      </section>

      <section className={styles.story} id="story">
        <div className={styles.storyIntro}>
          <h2>AI शैली में चित्रित स्टेशन की कहानी</h2>
          <p>
            चार दृश्य, चार भाव—धूप से लेकर समाधान तक। हर दृश्य में रंग, गति और ध्वनि के साथ महसूस कीजिए आम वाले और पुलिस वाले की दोस्ती। स्क्रोल करें और स्क्रीन पर खुलने
            दें यह गर्मजोशी भरी कहानी।
          </p>
        </div>
        <div className={styles.sceneGrid}>
          {scenes.map((scene, index) => (
            <ScenePanel key={scene.id} scene={scene} index={index} total={scenes.length} />
          ))}
        </div>
      </section>

      <section className={styles.dialogue}>
        <div className={styles.dialogueBubble}>
          <h3>सीधी बात</h3>
          <p>
            <strong>पुलिस वाला:</strong> “अरे! मेरा खाना तो गया!”<br />
            <strong>आम वाला:</strong> “साहब, चिंता नहीं! सबसे मीठा आम ही आपका असली लंच है।”<br />
            <strong>पुलिस वाला:</strong> “तुमने तो मेरी समस्या ही हल कर दी!”<br />
            <strong>आम वाला:</strong> “समस्या हो या गर्मी—आम वाला हमेशा तैयार!”
          </p>
        </div>
        <div className={styles.dialogueFooter}>
          <p>ट्रेन की सीटी, हवा की सरसराहट और मीठे आम की खुशबू—सब एक फ्रेम में।</p>
        </div>
      </section>

      <section className={styles.footer} aria-label="आम वाले की विदाई">
        <div className={styles.footerCard}>
          <h2>“अगली बार फिर मिलेंगे, आम के राजा!”</h2>
          <p>
            कहानी का सबसे प्यारा क्षण—विदा लेते हुए भी मुस्कानों का आदान-प्रदान। जब भी गर्मी सिर पर चढ़े, याद रखिए: समाधान कहीं न कहीं, किसी आम वाले के पास ज़रूर है।
          </p>
          <div className={styles.footerActions}>
            <a className={styles.share} href="https://twitter.com/intent/tweet?text=मीठी%20AI%20कार्टून%20कहानी%20%E2%80%94%20आम%20वाला%20और%20पुलिस%20वाला!&url=https%3A%2F%2Fagentic-5f8f5dce.vercel.app">
              कहानी साझा करें
            </a>
            <a className={styles.replay} href="#top">
              फिर से देखें
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
