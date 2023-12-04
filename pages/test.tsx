import { useEffect, useRef, useState } from "react";

export default function Test({
  user = "342101128244101120",
}: {
  user: string;
  privacy: boolean;
  name: string;
}) {
  const [discord, setDiscord] = useState<any>();

  useEffect(() => {
    fetch(`https://api.lanyard.rest/v1/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
        setDiscord(data);
      })
      .catch((error) => {
        console.error(error);
      });
    setInterval(() => {
      fetch(`https://api.lanyard.rest/v1/users/${user}`)
        .then((response) => response.json())
        .then((data) => {
          setDiscord(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 5000);
  }, [user]);

  const pfpReference = useRef<HTMLImageElement>(null);

  const [timeLeft, setTimeLeft] = useState<string>();
  const [diff, setDiff] = useState<number>();
  useEffect(() => {
    if (!discord) return;
    if (!diff) return;
    const end = new Date(discord.data.activities[0].timestamps.end);
    const now = new Date();
    setDiff(end.getTime() - now.getTime());

    const timeout = setTimeout(() => {
      setTimeLeft(
        `${new Date(diff).getMinutes()}:${new Date(diff).getSeconds()}`,
      );
      setDiff(diff - 1000);
    }, 500);

    return () => clearTimeout(timeout);
  }, [diff, discord]);

  const onMouseOver = () => {
    if (!pfpReference.current) return;
    pfpReference.current.src = `https://cdn.discordapp.com/avatars/${user}/${discord.data.discord_user.avatar}.gif?size=80`;
  };

  const onMouseLeave = () => {
    if (!pfpReference.current) return;
    pfpReference.current.src = `https://cdn.discordapp.com/avatars/${user}/${discord.data.discord_user.avatar}.webp?size=80`;
  };

  return (
    <div className="w-full flex justify-center">
      {discord && discord.success && (
        <div className="bg-gray-900 rounded-lg flex w-full">
          <div className="flex items-center gap-2">
            <img
              className="rounded-full"
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
              ref={pfpReference}
              src={`https://cdn.discordapp.com/avatars/${user}/${discord.data.discord_user.avatar}.webp?size=80`}
              alt={`Avatar of ${discord.data.discord_user.username}#${discord.data.discord_user.discriminator}`}
              width={48}
              height={48}
            />
            <div>
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
        </div>
      )}
    </div>
  );
}
