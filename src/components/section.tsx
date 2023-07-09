import styles from './section.module.scss'
import Tabs from "@/components/tabs";
import Pills from "@/components/pills";
import Disclaimer from "@/components/disclaimer";
import Treasury from "@/components/treasury";
import Teams from "@/components/teams";
import Bounty from "@/components/bounty";

export default function Section() {
    return (
        <div className={styles.section}>
            <div className="title">
                <h1><img src="https://d1fdloi71mui9q.cloudfront.net/rEjq0l0kQyuo5PSdumz2_1K2NQqJD6Ymr7R31"
                         alt="ETHBarcelona"/> ETHBarcelona</h1>
            </div>
            <div className="wrapper">
                <div className="left">
                    <Tabs></Tabs>
                    <Pills></Pills>
                    <div className="list">
                        <Bounty></Bounty>
                    </div>
                </div>
                <div className="right">
                    <Disclaimer></Disclaimer>
                    <Treasury></Treasury>
                    <Teams></Teams>
                </div>
            </div>
        </div>
    );
}
