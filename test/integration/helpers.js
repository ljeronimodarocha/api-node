import supertest from "supertest";
import * as chai from "chai";
import app from "../../src/app.js";

globalThis.app = app;
globalThis.request = supertest(app);
globalThis.expect = chai.expect;
