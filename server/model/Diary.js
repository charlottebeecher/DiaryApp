const db = require("../db/connect");

class Diary {
  constructor({
    diary_id,
    title,
    content,
    category,
    last_updated,
    created_date,
  }) {
    this.diary_id = diary_id;
    this.title = title;
    this.content = content;
    this.category = category;
    this.last_updated = last_updated;
    this.created_date = created_date;
  }

  static async createEntry(content, title, category) {
    const response = await db.query(
      "INSERT INTO dairy (content, title, category) VALUES ($1, $2, $3) RETURNING *;",
      [title, content, category],
    );

    if (response.rows.length === 0) {
        throw new Error("Unable to create entry")
    }

    return response.rows.map((de) => new Diary(de));
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM dairy;");

    if (response.rows.length === 0) {
      throw new Error("No entries available");
    }

    return response.rows.map((de) => new Diary(de));
  }
}

module.exports = Diary;
