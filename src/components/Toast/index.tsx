import { useEffect, useState } from "react";
import { Icon, Text } from "@/components";
import {
  CloseButton,
  IconContainer,
  ToastContainer,
  ToastContent,
} from "./styles";
import { useToast } from "@/services";

export function Toast() {
  const { toast, hideToast } = useToast();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitingTimer = setTimeout(() => {
      setIsExiting(true);
    }, (toast?.duration && toast.duration - 500) || 5500);

    const timer = setTimeout(() => {
      hideToast();
    }, toast?.duration || 6000);

    return () => {
      setIsExiting(false);
      clearTimeout(exitingTimer);
      clearTimeout(timer);
    };
  }, [toast]);

  if (!toast) return null;

  const { message, type } = toast;

  return (
    <ToastContainer
      key={Date.now()}
      isExiting={isExiting}
      type={type || "success"}
      role="alert"
    >
      <ToastContent>
        <IconContainer type={type || "success"}>
          {type === "success" && (
            <Icon name={type === "success" ? "check" : "close"} />
          )}
        </IconContainer>

        <Text as="p" preset="body" color="grayWhite">
          {message}
        </Text>
      </ToastContent>

      <CloseButton onClick={hideToast}>
        <Icon name="close" />
      </CloseButton>
    </ToastContainer>
  );
}
