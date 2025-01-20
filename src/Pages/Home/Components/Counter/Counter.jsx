import React from "react";
import styles from "./Counter.module.css";
import { EventList, IconAward, IconBxWorld, IconPeopleGroup } from "../../../../Utils/Icons/Icons";
import { CounterItem } from "./Components/CounterItem/CounterItem";

export const Counter = () => {
  return (
    <div className={styles.container}>
      <CounterItem
        svg={<IconPeopleGroup height={"3em"} width={"3em"} />}
        title={"Student Members"}
        limit={450}
        speed={10}
        start={200}
      />
<div className={styles.hr}></div>

       <CounterItem
        svg={<EventList height={"2.3em"} width={"2.3em"} />}
        title={"Events"}
        limit={22}
        speed={100}
        start={0}
      />
      <div className={styles.hr}></div>

      <CounterItem
        svg={<IconBxWorld height={"3em"} width={"3em"} />}
        title={"Alumni Network"}
        limit={2000}
        speed={10}
        start={1800}
      />
      <div className={styles.hr}></div>

       <CounterItem
        svg={<IconAward height={"2.7em"} width={"2.7em"} />}
        title={"Awards"}
        limit={2}
        speed={1000}
        start={0}
      />
    </div>
  );
};
