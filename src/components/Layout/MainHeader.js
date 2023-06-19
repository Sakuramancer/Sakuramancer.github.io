import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.desktop}>Кампания из Эвенглена</h1>
      <h1 className={classes.mobile}>КиЭ</h1>
      <nav>
        <ul>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
