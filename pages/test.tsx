import { useEffect, useMemo, useRef, useState } from "react";

export default function Test({
  user = "342101128244101120",
  privacy = true,
  name = "alexng353",
}: {
  user: string;
  privacy: boolean;
  name: string;
}) {
  const [discord, setDiscord] = useState<any>();

  useEffect(() => {
    fetch(`https://api.lanyard.rest/v1/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);

        setDiscord(data);
      });
    setInterval(() => {
      fetch(`https://api.lanyard.rest/v1/users/${user}`)
        .then((res) => res.json())
        .then((data) => {
          setDiscord(data);
        });
    }, 5000);
  }, [user]);

  const pfpRef = useRef<HTMLImageElement>(null);

  const [timeLeft, setTimeLeft] = useState<string>();
  const [diff, setDiff] = useState<number>();
  useEffect(() => {
    if (!discord) return;
    const end = new Date(discord.data.activities[0].timestamps.end);
    const now = new Date();
    setDiff(end.getTime() - now.getTime());

    const timeout = setTimeout(() => {
      setTimeLeft(
        `${new Date(diff).getMinutes()}:${new Date(diff).getSeconds()}`
      );
      setDiff(diff - 1000);
    }, 500);
    return () => clearTimeout(timeout);
  }, [diff, discord]);

  return (
    <div className="w-full flex justify-center">
      {discord && discord.success && (
        <div className="bg-gray-900 rounded-lg flex w-full">
          <div className="flex items-center gap-2">
            <img
              className="rounded-full"
              onMouseOver={() => {
                pfpRef.current.src = `https://cdn.discordapp.com/avatars/${user}/${discord.data.discord_user.avatar}.gif?size=80`;
              }}
              onMouseLeave={() => {
                pfpRef.current.src = `https://cdn.discordapp.com/avatars/${user}/${discord.data.discord_user.avatar}.webp?size=80`;
              }}
              ref={pfpRef}
              src={`https://cdn.discordapp.com/avatars/${user}/${discord.data.discord_user.avatar}.webp?size=80`}
              alt={`Avatar of ${discord.data.discord_user.username}#${discord.data.discord_user.discriminator}`}
              width={48}
              height={48}
            />
            <div>
              {/* <h1>
                {!privacy ? (
                  <>
                    {discord.data.discord_user.username}#
                    {discord.data.discord_user.discriminator}
                  </>
                ) : (
                  <>{name ? name : "anonymous"}</>
                )}
              </h1> */}
              <h2>
                <strong>
                  {discord.data.activities[0].name === "YouTube Music"
                    ? "Listening To"
                    : "Playing"}{" "}
                </strong>
                <br />
                {discord.data.activities[0].details} -{" "}
                {discord.data.activities[0].state} <br />
                on {discord.data.activities[0].name}
              </h2>
              <h3>
                {discord.data.activities[0].assets.small_text} - {timeLeft} left
              </h3>
            </div>
          </div>
          {/* <div>
            {
              <img
                src={`https://cdn.discordapp.com/app-assets/${discord.data.activities[0].application_id}/${discord.data.activities[0].assets.large_image}.png`}
                alt=""
              />
            }
          </div> */}
        </div>
      )}
    </div>
  );
}
