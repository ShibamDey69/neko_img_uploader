import axios from "axios";
import FormData from "form-data";
import fs from "node:fs";

export default class Scrape {
  constructor() {
    this.imgbb_url = "https://imgbb.com/";
    this.file_coffee_url = "https://file.coffee/api/file/upload";
    this.pixeldrain_url = "https://pixeldrain.com/api/file";
    this.pixhost_url = "https://api.pixhost.to/images";
    this.telegraph_url = "https://graph.org/upload";
  }

  imgbb = async (file) => {
    try {
      if (!fs.existsSync(file) && !file.includes("https:"))
        throw new Error("File not found");
      let res = await axios.get(this.imgbb_url);
      let token = JSON.parse(
        res.data.toString().split("auth_token=")[1].split(";")[0],
      );

      let img;
      if (file.includes("https:")) {
        img = await axios.get(file, { responseType: "stream" });
      }
      let streamData = file.includes("https:")
        ? img.data
        : fs.createReadStream(file);
      let form = new FormData();
      form.append("source", streamData);
      form.append("type", "file");
      form.append("action", "upload");
      form.append("timestamp", Date.now());
      form.append("auth_token", token);

      const headers = {
        ...form.getHeaders(),
      };

      let { data } = await axios.post(`${this.imgbb_url}json`, form, {
        headers,
      });

      return data.image.image.url;
    } catch (error) {
      throw new Error(error);
    }
  };

  file_coffee = async (file) => {
    try {
      if (!fs.existsSync(file) && !file.includes("https:"))
        throw new Error("File not found");
      let form = new FormData();
      let img;
      if (file.includes("https:")) {
        img = await axios.get(file, { responseType: "stream" });
      }
      let streamData = file.includes("https:")
        ? img.data
        : fs.createReadStream(file);
      form.append("file", streamData);

      let res = await axios.post(this.file_coffee_url, form, {
        headers: {
          ...form.getHeaders(),
        },
      });
      return res.data.url;
    } catch (error) {
      throw new Error(error);
    }
  };

  pixeldrain = async (file) => {
    try {
      if (!fs.existsSync(file) && !file.includes("https:"))
        throw new Error("File not found");
      let form = new FormData();
      let img;
      if (file.includes("https:")) {
        img = await axios.get(file, { responseType: "stream" });
      }
      let streamData = file.includes("https:")
        ? img.data
        : fs.createReadStream(file);
      form.append("file", streamData);
      let res = await axios.post(this.pixeldrain_url, form, {
        headers: {
          ...form.getHeaders(),
        },
      });
      return `https://pixeldrain.com/api/file/${res.data.id}`;
    } catch (error) {
      throw new Error(error);
    }
  };

  pixhost = async (file) => {
    try {
      if (!fs.existsSync(file) && !file.includes("https:"))
        throw new Error("File not found");
      let form = new FormData();
      let img;
      if (file.includes("https:")) {
        img = await axios.get(file, { responseType: "stream" });
      }
      let streamData = file.includes("https:")
        ? img.data
        : fs.createReadStream(file);
      form.append("content_type", 0);
      form.append("img", streamData);
      let res = await axios.post(this.pixhost_url, form, {
        headers: {
          ...form.getHeaders(),
        },
      });
      return `https://img92.pixhost.to/images/${
        res.data.show_url.split("show/")[1]
      }`;
    } catch (error) {
      throw new Error(error);
    }
  };

  telegraph = async (file) => {
    try {
      if (!fs.existsSync(file) && !file.includes("https:"))
        throw new Error("File not found");
      let form = new FormData();
      let img;
      if (file.includes("https:")) {
        img = await axios.get(file, { responseType: "stream" });
      }
      let streamData = file.includes("https:")
        ? img.data
        : fs.createReadStream(file);
      form.append("file", streamData);
      const data = await axios({
        url: this.telegraph_url,
        method: "POST",
        headers: {
          ...form.getHeaders(),
        },
        data: form,
      });
      return `https://graph.org${data.data[0].src}`;
    } catch (err) {
      throw new Error(err);
    }
  };
}

