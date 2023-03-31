export default class Content {
  editMode?: boolean;
  meta?: Meta;
  nav?: Navigation;
  mast?: Mast;
  portfolio?: Portfolio;
  about?: About;
  contact?: Contact;
  footer?: Footer;
  copyright?: Copyright;
}

class FooterItem {
  title?: ContentField<string>;
  text?: ContentField<string>;
  actions?: FooterAction[];
}

class FooterAction {
  social?: ContentField<string>;
}

class Footer {
  columns?: FooterItem[];
}

class Contact {
  title?: ContentField<string>;
  send?: ContentField<string>;
}

class Story {
  text?: ContentField<string>;
}

class About {
  title?: ContentField<string>;
  columns?: Story[];
  callToAction?: ContentField<string>;
}

class Portfolio {
  title?: ContentField<string>;
  gallery?: ContentField<string[]>;
}

class Meta {
  title?: ContentField<string>;
}

class Mast {
  title?: ContentField<string>;
  avatar?: ContentField<string>;
  professions?: Profession[];
}

class Profession {
  title?: ContentField<string>;
}

class Navigation {
  title?: ContentField<string>;
  menu?: Menu;
}

class Menu {
  title?: ContentField<string>;
  items?: MenuItem[];
}

class MenuItem {
  title?: ContentField<string>;
  url?: ContentField<string>;
}

class Copyright {
  title?: ContentField<string>;
}

class ContentField<T> {
  key?: string;
  value?: T;
}
