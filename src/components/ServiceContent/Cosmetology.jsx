import React from "react";
import style from "./styles.module.scss"

export default () => {
    return (
        <React.Fragment>
            <h2 className={style.Context__Header}>Косметология</h2>
            <p className={style.Context__Paragraph}>Наша кожа постоянно подвергается агрессивному воздействию внешних факторов. И это настоящее испытание для нее. Ветер, солнце, пот, холод, хлорированная вода и естественные процессы старения – лишь малый перечень того, что негативно сказывается на красоте нашей кожи. Сохранять ее – задача не только женщин, но и мужчин. Салон красоты «Ирис» готов стать вашим незаменимым помощником в уходе за вашим телом. Мы предлагаем широкий спектр оздоровительных, очищающих и омолаживающих процедур, выполняющихся по уникальным методикам, безопасным и эффективным для клиентов различных возрастных категорий. С нами ваша кожа будет сиять, и вы сможете всегда оставаться красивыми и здоровыми.</p>
            <h3 className={style.Context__Title}>Преимущества косметологических услуг от «Ирис»</h3>
            <p className={style.Context__Paragraph}>В салоне «Ирис» работают высококвалифицированные специалисты косметологической сферы, постоянно повышающие уровень своего мастерства. Обратившись к нам, вы получаете:</p>
            <ul className={style.Context__List}>
                <li className={style.Context__ListItem}>профессиональное обслуживание и консультирование по любому интересующему вас вопросу;</li>
                <li className={style.Context__ListItem}>эффективные и безопасные процедуры, выполняющиеся с использованием инновационного оборудования и лучших косметических средств;</li>
                <li className={style.Context__ListItem}>безупречный результат каждой процедуры и доступные цены в прайсе нашего салона.</li>
            </ul>
            <p className={style.Context__Paragraph}>В своей работе мы используем только одноразовые инструменты, а все элементы оборудования, предназначенные для многократного использования, регулярно стерилизуются. Косметические средства, применяемые нами, сертифицированы, гипоаллергенны и абсолютно безопасны для здоровья. В нашем ассортименте продукция только проверенных производителей – известных брендов профессиональной косметики из Израиля, Испании и Франции.</p>
            <h3 className={style.Context__Title}>Какую процедуру выбрать?</h3>
            <p className={style.Context__Paragraph}>Большинство клиентов, обращающихся к нам, точно знают, чего они хотят. Но часто к нам приходят люди, желающие что-то изменить в себе, но не представляющие с чего начать. Бесценную помощь им предоставляют наши профессиональные косметологи. Квалифицированные мастера всегда подскажут, в чем именно нуждается ваша кожа. У нас вы сможете:</p>
            <ul className={style.Context__List}>
                <li className={style.Context__ListItem}>обеспечить питательный уход коже лица, рук и стоп;</li>
                <li className={style.Context__ListItem}>удалить волосяной покров в местах, где его присутствие нежелательно;</li>
                <li className={style.Context__ListItem}>удалить волосяной покров в местах, где его присутствие нежелательно;</li>
                <li className={style.Context__ListItem}>воспользоваться инновационными методиками косметологического моделирования.</li>
            </ul>
            <p className={style.Context__Paragraph}>Во время каждой процедуры вы испытаете небывалое расслабление, а сам результат непременно превзойдет все ваши ожидания.</p>
        </React.Fragment>

    )
}