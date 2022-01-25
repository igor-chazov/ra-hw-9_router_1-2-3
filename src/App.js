import React from 'react';
import NavigationMenu from './components/NavigationMenu';
import CRUD from './components/CRUD';
import Authentication from './components/Authentication';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>9. Домашнее задание к лекции «React Router»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task1'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>9.1 Навигационное меню</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-bottom'} href={'#task2'}>
                  <span className={'_visually-hidden'}>next task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body task__body_task1'}>
            <NavigationMenu />
          </div>
        </div>

        <div className={'main__item task _container'} id={'task2'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>9.2 CRUD</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-top'} href={'#header'}>
                  <span className={'_visually-hidden'}>previous task</span>
                </a>
              </div>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-bottom'} href={'#task3'}>
                  <span className={'_visually-hidden'}>next task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body task__body_task2'}>
            <CRUD />
          </div>
        </div>

        <div className={'main__item task _container'} id={'task3'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>9.3 Authentication*</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-top'} href={'#header'}>
                  <span className={'_visually-hidden'}>home task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body task__body_task3'}>
            <Authentication />
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
