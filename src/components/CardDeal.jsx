import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
    <section
        className={`${layout.section} ${styles.padding} bg-black-gradient-2 rounded-[20px]`}
    >
        <div className={`${layout.sectionInfo} flex-col`}>
            <h2 className={styles.heading2}>
                Find a better card deal <br className="hidden sm:block" /> in
                few easy steps.
            </h2>
            <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <Button className="mt-10" />
        </div>
        <div className={layout.sectionImg}>
            <img
                src={card}
                alt="billing"
                className="relative z-[5] h-[100%] w-[100%]"
            />
        </div>
    </section>
);

export default CardDeal;
