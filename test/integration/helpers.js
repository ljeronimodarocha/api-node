import supertest from "supertest";
import * as chai from "chai";
import setupApp from "../../src/app.js";

globalThis.app = setupApp;
globalThis.setupApp = setupApp;
globalThis.supertest = supertest;
globalThis.expect = chai.expect;
