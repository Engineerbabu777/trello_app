import { BSON, Realm } from "realm";

export class Task extends Realm.Object<Task> {
  _id!: BSON.ObjectId; // required
  description!: string; // required
  isComplete: boolean = false; // optional with default
  createdAt: Date = new Date(); // optional with default
  position: Realm.Types.Int = 0; // optional with default
  user_id!: string; // required

  static primaryKey = "_id"; // keep primary key
}
