"use client";
import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import { Icons } from "./Icons";
import { useToast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function signWithGoogle() {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "There was a problem",
        description: "Ther was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("flex justify-center", className)}>
      <Button
        size="sm"
        className="w-full"
        isLoading={isLoading}
        onClick={signWithGoogle}
      >
        {isLoading ? null : (
          <Icons.google className="h-4 w-4 mr-2"></Icons.google>
        )}
        Google
      </Button>
    </div>
  );
};
export default UserAuthForm;
