import { Heading } from "natmfat/components/Heading";
import { Text } from "natmfat/components/Text";
import { View } from "natmfat/components/View";

import { Pill } from "natmfat";
import { Section } from "../components/Section";
import { ButtonCopyTheme } from "./components/ButtonCopyTheme";
import { ButtonImportTheme } from "./components/ButtonImportTheme";
import { ButtonResetTheme } from "./components/ButtonResetTheme";
import { PanelColor } from "./components/PanelColor";
import { PanelPreview } from "./components/PanelPreview";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function ThemePage() {
  return (
    <>
      <Section>
        <Heading level={1}>Custom Themes</Heading>
        <Text>Modify, preview, and export custom themes.</Text>
        <View className="pt-1.5 pb-2">
          <Pill variant="muteStatic" color="primary" className="w-fit">
            New Theme Editor coming soon
          </Pill>
        </View>
      </Section>

      <Section>
        <View className="flex-row justify-between gap-2">
          <View className="flex-row gap-2">
            <ButtonImportTheme />
            <ButtonCopyTheme />
            <ButtonResetTheme />
          </View>

          <ThemeSwitcher />
        </View>

        <View className="mt-2 gap-2">
          <PanelColor />
          <PanelPreview />
        </View>
      </Section>
    </>
  );
}
