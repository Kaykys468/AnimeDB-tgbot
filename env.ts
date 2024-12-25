import { config } from "dotenv";
import { cleanEnv, str } from "envalid";

await config({ export: true });

export default cleanEnv(
  {
    BOT_TOKEN: "7529109508:AAG2qcENKveNMskyy4f0H-0S0DLaDxBRmdY",
  },
  {
    BOT_TOKEN: str(),
  }
);
