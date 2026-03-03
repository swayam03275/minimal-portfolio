import { Card, CardContent } from "@/components/ui/card";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    icon: <Mail className="size-7 text-muted-foreground" />,
    title: "Email",
    value: "swayamaggarwal03@gmail.com",
    link: "mailto:swayamaggarwal03@gmail.com",
  },
  {
    icon: <Linkedin className="size-7 text-muted-foreground" />,
    title: "LinkedIn",
    value: "@swayamagarwal",
    link: "https://linkedin.com/in/swayam-agarwal-70b8a9246/",
  },
  {
    icon: <Github className="size-7 text-muted-foreground" />,
    title: "GitHub",
    value: "@swayam03275",
    link: "https://github.com/swayam03275",
  },
];

export default function ContactCard() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mb-8">
        {contactItems.map((item, index) => (
          <Link href={item.link} key={index} aria-label={`${item.title} links`}>
            <Card className="w-full md:max-w-xs hover:bg-muted/60 transition-all duration-300">
              <CardContent className="flex items-center gap-3 p-2">
                <div className="h-16 w-16 shrink-0 rounded-md border border-border bg-background flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {item.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
