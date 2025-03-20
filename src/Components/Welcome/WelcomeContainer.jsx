import { arrow } from '../../utils/arrow';
import { LinkCustom } from '../UI/LinkCustom';
import { data } from './libs/data';
import w from './styles/Welcome.module.css';
import WelcomeCard from './WelcomeCard';

const WelcomeContainer = () => {
    return (
        <div className={w.container}>
            <h1 className={w.title}>
                Добавь свой ВУЗ,
                Отслеживай расписание удобно!
            </h1>
            <p>Наш сервис предоставляет интеграцию с 10+ ВУЗами РФ и удобный менеджмент расписания</p>
            <LinkCustom path='/' color={'secondary'} className={w.link}>
                <span>Начать пользоваться</span>
                {arrow()}
            </LinkCustom>
            <ul className={w.list}>
                {data.map(({id, img, title, description, link, links}) => <WelcomeCard key = {id} img={img} title={title} description={description} links={links} link={link}/>)}
            </ul>
        </div>
    )
}

export default WelcomeContainer