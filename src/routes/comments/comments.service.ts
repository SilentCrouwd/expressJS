import { USER_DATABASE } from "../users/user.service.js";

export function getCommentsById(userId: number) {
  const selectedComments = USER_DATABASE.find(
    (user) => userId === user.id,
  )?.comments;

  if (!selectedComments) {
    throw new Error("Keine Comments vorhanden ");
  }
  return selectedComments;
}
