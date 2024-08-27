const { Clerk } = require("@clerk/clerk-sdk-node");


Clerk.initialize({ apiKey: process.env.CLERK_SECRET_KEY });

export async function setUserRole(userId, role,bio) {
  try {
    if(!role=='professor'){
    const user = await Clerk.users.getUser(userId);
    await Clerk.users.updateUser(userId, {
      publicMetadata: { ...user.publicMetadata, role: role,bio:bio },
    });
    return
}
const user = await Clerk.users.getUser(userId);
await Clerk.users.updateUser(userId, {
  publicMetadata: { ...user.publicMetadata, role: role, ratings:0, feedbacks:0, bio:bio},
});


    console.log(`User ${userId} has been assigned the role: ${role}`);
  } catch (error) {
    console.error("Failed to set user role:", error);
  }
}

