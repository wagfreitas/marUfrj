// Default menu settings configurations

export interface MenuItem {
  title: string;
  icon: string;
  page: string;
  isExternalLink?: boolean;
  issupportExternalLink?: boolean;
  badge: { type: string, value: string };
  submenu: {
    items: Partial<MenuItem>[];
  };
  section: string;
}

export interface MenuConfig {
  vertical_menu: {
    items: Partial<MenuItem>[]
  };
}

export const MenuSettingsConfig: MenuConfig = {
  vertical_menu: {
    items: [
      {
        title: 'Log de Alteração',
        icon: 'la-file',
        page: '/changelog',
        badge: { type: 'badge-danger', value: '1.0' }
      },

      { section: 'Área do Aluno', icon: 'la-ellipsis-h' },
      {
        title: 'Minhas Atividades',
        icon: 'la-user',
        page: '/alunosAtividades',
      },
      {
        title: 'Calenders',
        icon: 'la-calendar',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Basic',
              page: '/calender/basic'
            },
            {
              title: 'Events',
              page: '/calender/events'
            },

            {
              title: 'Add Event',
              page: '/calender/addevent'
            },
          ]
        }
      },

      { section: 'Área do Professor', icon: 'la-ellipsis-h' },

      {
        title: 'Minhas Atividades',
        icon: 'la-book',
        page: '/',
      },

      
      { section: 'Administrativo', icon: 'la-ellipsis-h' },
      {
        title: 'Cadastros',
        icon: 'la-plus-circle',
        page: '/',
      }
    ]
  }

};





