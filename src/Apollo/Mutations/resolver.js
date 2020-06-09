import { useMutation } from "@apollo/react-hooks";

const resolver = require("./mutations");

const CREATE_USER = resolver.CREATE_USER;
const LOGIN = resolver.LOGIN;

function CreateUser