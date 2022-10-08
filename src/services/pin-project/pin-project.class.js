const { Web3Storage, File } = require("web3.storage");
const { Service } = require("feathers-nedb");
const errors = require("@feathersjs/errors");

exports.PinProject = class PinProject extends Service {
  async find(params) {
    const { query } = params;
    if (!!query.projectId) {
      params.query.projectId = Number(params.query.projectId);
    }

    return super.find(params);
  }

  async create(data, params) {
    const storageClient = new Web3Storage({
      token: process.env.WEB3STORAGE_TOKEN,
    });

    const { projectId, json } = data;
    const buffer = Buffer.from(JSON.stringify(json));
    const files = [new File([buffer], `project-${projectId}.json`)];

    try {
      const cid = await storageClient.put(files);
      return super.create({ projectId, cid }, params);
    } catch (e) {
      throw new errors.BadRequest(`Error: ${e.message}`);
    }
  }
};
