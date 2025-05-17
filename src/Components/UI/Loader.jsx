import l from './styles/Loader.module.css';
//import main from '../../assets/images/'

const Loader = () => {


    return (
        <div className={l.loader_wrapper}>
            <span className={l.loader} />
        </div>
    );
}

export default Loader;