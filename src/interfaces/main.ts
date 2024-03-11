export interface BreadCumb {
  bread: string;
  router: string;
}

export interface ModalProducts {
  onChangeModal: () => void;
  modalOpen?: boolean;
}

export interface FormModalProduct extends ModalProducts {
  typeForm: string;
}

export interface TitleProduct  {
  typeForm: string;
}
export interface HeaderMain {
  typePage: string;
  onChangeModal: () => void;
}

export interface TableMain {
  active: boolean;
  onChangeModal: () => void;
}
