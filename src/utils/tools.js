let isValid = true;
let TOKEN_KEY = "";
let errorValidation = {};

export const getProductCategoryInfo = (product) => {
  switch (true) {
    case product.some(({ categoryId }) => categoryId === 12):
      return "Leche";
    case product.some(({ categoryId }) => categoryId === 13):
      return "Yogur";
    case product.some(({ categoryId }) => categoryId === 15):
      return "Queso";
    default:
      return "Otros";
  }
};

export const validateForm = (user) => {
  const { email, password } = user;

  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  if (!email) {
    errorValidation = {
      ...errorValidation,
      email: {
        isValid: false,
        message: "Campo obligatorio",
      },
    };
  }

  if (!password) {
    errorValidation = {
      ...errorValidation,
      password: {
        isValid: false,
        message: "Campo obligatorio",
      },
    };
  }

  console.log(errorValidation);

  return isValid;
};

export const removeAccents = (str) => {
  var map = {
    "-": " ",
    a: "á|à|ã|â|À|Á|Ã|Â",
    e: "é|è|ê|É|È|Ê",
    i: "í|ì|î|Í|Ì|Î",
    o: "ó|ò|ô|õ|Ó|Ò|Ô|Õ",
    u: "ú|ù|û|ü|Ú|Ù|Û|Ü",
    c: "ç|Ç",
    n: "ñ|Ñ",
  };

  str = str.toLowerCase();

  for (var pattern in map) {
    str = str.replace(new RegExp(map[pattern], "g"), pattern);
  }

  return str;
};

export const getTokenKey = (token) => {
  TOKEN_KEY = token;
};

export const login = (history) => {
  localStorage.setItem("LoginSuperMarket", TOKEN_KEY);
  history.push("/home");
};

export const logout = () => {
  localStorage.removeItem("LoginSuperMarket");
};

export const isLogin = () => {
  if (localStorage.getItem("LoginSuperMarket")) {
    return true;
  }

  return false;
};

export const LoginData = {
  id: "login",
  title: "Bienvenido",
  showAuxContent: true,
  linkRegister: "register",
  inputs: [
    {
      id: "login-email",
      inputType: "email",
      title: "Email *",
      name: "email",
    },
    {
      id: "login-password",
      inputType: "password",
      title: "Contraseña *",
      name: "password",
    },
  ],
};

export const RegisterData = {
  id: "register",
  title: "Registrarse",
  showAuxContent: false,
  inputs: [
    {
      id: "register-name",
      inputType: "text",
      title: "Nombre y Apellido *",
      name: "text",
    },
    {
      id: "register-phone",
      inputType: "tel",
      title: "Telefono *",
      name: "phone",
    },
    {
      id: "register-email",
      inputType: "email",
      title: "Email *",
      name: "email",
    },
    {
      id: "register-password",
      inputType: "password",
      title: "Contraseña *",
      name: "password",
      caption: "Debe contener minimo 6 caracteres",
    },
  ],
};
