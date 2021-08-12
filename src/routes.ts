import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensure_admin } from "./middlewares/ensureAdmin";
import { AuthenticationUser } from "./controllers/AuthenticUserController"
import {CreateComplimentController} from "./controllers/CreateComplimentController";
import {ensureAuthenticated} from "./middlewares/ensureAuthenticate";
import {listComplimentsSenders} from "./controllers/ComplimentsSenders"
import { listComplimentsReceiver } from "./controllers/ComplimentsReceiver";
import { ListTagsController } from "./controllers/listTagsController";
import { ListUserController } from "./controllers/ListUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const AuthenticationController = new AuthenticationUser()
const createComplimentController =  new CreateComplimentController()
const listSenders = new listComplimentsSenders();
const listReceiver = new listComplimentsReceiver();
const listTags =  new ListTagsController();
const listUsers = new ListUserController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated, ensure_admin, createTagController.handle);
router.post('/login', AuthenticationController.handle);
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);

router.get('/users/compliments/sender', ensureAuthenticated, listSenders.handle)
router.get('/user/compliments/receiver', ensureAuthenticated, listReceiver.handle)
router.get("/tags", ensureAuthenticated, listTags.go);
router.get('/users', ensureAuthenticated, listUsers.handle)

export {router};