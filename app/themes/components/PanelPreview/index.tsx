"use client";

import { Anchor } from "natmfat/components/Anchor";
import { Avatar } from "natmfat/components/Avatar";
import { Button } from "natmfat/components/Button";
import { ButtonGroup, ButtonGroupItem } from "natmfat/components/ButtonGroup";
import { Heading } from "natmfat/components/Heading";
import { IconButton } from "natmfat/components/IconButton";
import { Input } from "natmfat/components/Input";
import { Pill } from "natmfat/components/Pill";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "natmfat/components/Popover";
import { SearchBar } from "natmfat/components/SearchBar";
import { Separator } from "natmfat/components/Separator";
import { StatusBanner } from "natmfat/components/StatusBanner";
import { Surface } from "natmfat/components/Surface";
import { Switch } from "natmfat/components/Switch";
import { Tabs, TabsList, TabsTrigger } from "natmfat/components/Tabs";
import { Text } from "natmfat/components/Text";
import { ThemeProvider } from "natmfat/components/ThemeProvider";
import { View } from "natmfat/components/View";
import { RiArrowRightIcon } from "natmfat/icons/RiArrowRightIcon";
import { RiBox1Icon } from "natmfat/icons/RiBox1Icon";
import { RiErrorWarningIcon } from "natmfat/icons/RiErrorWarningIcon";
import { RiGithubIcon } from "natmfat/icons/RiGithubIcon";
import { RiGridIcon } from "natmfat/icons/RiGridIcon";
import { RiImageIcon } from "natmfat/icons/RiImageIcon";
import { RiNotificationIcon } from "natmfat/icons/RiNotificationIcon";
import { RiPaletteIcon } from "natmfat/icons/RiPaletteIcon";
import { RiRemixiconIcon } from "natmfat/icons/RiRemixiconIcon";
import { RiSquareIcon } from "natmfat/icons/RiSquareIcon";
import { RiStarIcon } from "natmfat/icons/RiStarIcon";
import { RiSunIcon } from "natmfat/icons/RiSunIcon";
import { RiTextIcon } from "natmfat/icons/RiTextIcon";
import { RiUserIcon } from "natmfat/icons/RiUserIcon";
import { spaceTokens, tokens } from "natmfat/lib/tokens";
import { CSSProperties } from "react";

import { useColorStore } from "../../hooks/useColorStore";
import { EnhancedCheckbox } from "./EnhancedCheckbox";
import { ListItem } from "./ListItem";
import { Subpanel } from "./Subpanel";

export function PanelPreview() {
  const colorVars = useColorStore((state) => state.colorVars);

  return (
    <ThemeProvider
      data-theme="custom"
      style={colorVars as CSSProperties}
      className="w-full p-2 rounded-default border border-[var(--interactive-border)]"
    >
      <View className="w-full flex-1 grid grid-cols-3 gap-2 items-stretch">
        {/* Subsection 1 */}
        <Subpanel>
          <View className="flex-row gap-2">
            <SearchBar placeholder="Search" className="flex-1" />
            <Button>Submit</Button>
          </View>

          <StatusBanner
            icon={<RiErrorWarningIcon />}
            color="warning"
            text="Please upgrade to the new version."
          />

          <Surface elevated>
            <ListItem icon={<RiSquareIcon />} text="Box" active />
            <ListItem icon={<RiGridIcon />} text="Grid" />
            <ListItem icon={<RiImageIcon />} text="Image" insetLevel={1} />
            <ListItem icon={<RiImageIcon />} text="Image" insetLevel={1} />
            <ListItem icon={<RiTextIcon />} text="Text" insetLevel={1} />
          </Surface>

          <View className="flex-row gap-2">
            <Pill color="primary" variant="fillStatic">
              Fully-featured
            </Pill>
            <Pill color="primary" variant="outlineStatic">
              Built with Radix
            </Pill>
            <Pill color="primary" variant="muteStatic">
              Open source
            </Pill>
          </View>

          <View className="flex-row gap-2 items-center">
            <IconButton
              alt="Star"
              color="primary"
              variant="fill"
              className="h-7 w-7"
            >
              <RiStarIcon />
            </IconButton>
            <IconButton
              alt="User"
              color="primary"
              variant="outline"
              className="h-7 w-7"
            >
              <RiUserIcon />
            </IconButton>
            <IconButton
              alt="Star"
              color="transparent"
              variant="fill"
              className="h-7 w-7"
            >
              <RiStarIcon />
            </IconButton>
            <IconButton
              alt="User"
              color="transparent"
              variant="outline"
              className="h-7 w-7"
            >
              <RiUserIcon />
            </IconButton>

            <Popover>
              <PopoverTrigger className="w-fit" asChild>
                <IconButton alt="Notifications" className="h-7 w-7">
                  <RiNotificationIcon />
                </IconButton>
              </PopoverTrigger>
              <PopoverContent>
                <View className="flex-row gap-8 items-center">
                  <Heading level={2}>Notifcations</Heading>
                  <Button
                    size={tokens.space12}
                    color="transparent"
                    style={{ width: "fit" }}
                  >
                    View All
                    <RiArrowRightIcon />
                  </Button>
                </View>

                <Separator orientation="horizontal" className="my-3" />

                <ButtonGroup defaultValue="all">
                  <ButtonGroupItem value="all">All</ButtonGroupItem>
                  <ButtonGroupItem value="unread">Unread</ButtonGroupItem>
                </ButtonGroup>

                <Separator orientation="horizontal" className="my-3" />

                <View className="items-center justify-center text-center my-3">
                  <Text>You&apos;re all caught up!</Text>
                </View>
              </PopoverContent>
            </Popover>
            <Switch color="primary" defaultChecked={true} />
            <Switch color="primary" defaultChecked={false} />
          </View>

          <Surface
            elevated
            className="border border-[var(--interactive-border)] rounded-default p-3 gap-2 flex-row items-center"
          >
            <Avatar
              src="https://natmfat.com/logo.png"
              username="natmfat"
              fullName="Nathan Offline"
              size={spaceTokens.space40}
            />
            <View>
              <Heading level={1} size="subheadDefault">
                Nathan
              </Heading>
              <Text color="dimmest">natmfat@gmail.com</Text>
            </View>
          </Surface>
        </Subpanel>

        {/* Subsection 2 */}
        <Subpanel>
          <Surface
            elevated
            className="gap-3 p-4 rounded-default border border-[var(--interactive-border)] h-full"
          >
            <Heading level={1} size="headerDefault">
              Sign up
            </Heading>
            <label className="flex flex-col gap-1">
              <Text>Full name</Text>
              <Input placeholder="Enter your name" />
            </label>
            <label className="flex flex-col gap-1">
              <Text>Email</Text>
              <Input placeholder="Enter email address" />
            </label>
            <label className="flex flex-col gap-1">
              <Text>Password</Text>
              <Input placeholder="Enter your password" />
            </label>
            <Button>Create account</Button>

            <Separator />
            <Button color="transparent" variant="outline">
              <RiGithubIcon />
              Continue with GitHub
            </Button>
          </Surface>
        </Subpanel>

        {/* Subsection 3 */}
        <Subpanel>
          <Tabs defaultValue="themes">
            <TabsList>
              <TabsTrigger value="themes">
                <RiSunIcon />
                Themes
              </TabsTrigger>
              <TabsTrigger value="primitives">
                <RiBox1Icon />
                Primitives
              </TabsTrigger>
              <TabsTrigger value="icons">
                <RiRemixiconIcon />
                Icons
              </TabsTrigger>
              <TabsTrigger value="colors">
                <RiPaletteIcon />
                Colors
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <View asChild>
            <Text asChild multiline>
              <blockquote className="border-primary-default border-l-2 px-2">
                Susan Kare is an American graphic designer and artist, who
                contributed interface elements and typefaces for the first Apple
                Macintosh personal computer from 1983 to 1986.
              </blockquote>
            </Text>
          </View>

          <View asChild>
            <Text asChild multiline color="dimmest">
              <blockquote className="border-foreground-dimmest border-l-2 px-2">
                Susan Kare is an American graphic designer and artist, who
                contributed interface elements and typefaces for the first Apple
                Macintosh personal computer from 1983 to 1986.
              </blockquote>
            </Text>
          </View>

          <Surface elevated className="p-2 rounded-default gap-1">
            <EnhancedCheckbox>
              Response to comment <Anchor href="#">#384</Anchor> from Travis
            </EnhancedCheckbox>
            <EnhancedCheckbox>
              Invite <Anchor href="#">Acme Co.</Anchor> team to Slack
            </EnhancedCheckbox>
            <EnhancedCheckbox>
              Create a report <Anchor href="#">requested</Anchor> by Danilo
            </EnhancedCheckbox>
            <EnhancedCheckbox defaultChecked>
              Close Q2 finances
            </EnhancedCheckbox>
            <EnhancedCheckbox defaultChecked>
              Review invoice <Anchor href="#">#3456</Anchor>
            </EnhancedCheckbox>
          </Surface>
        </Subpanel>
      </View>
    </ThemeProvider>
  );
}
