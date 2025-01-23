import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/ui/icons'

function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid w-full grow items-center px-4 sm:justify-center">
        <Card className="w-full sm:w-96 bg-zinc-950/70 border-slate-700/40">
        <CardHeader>
            <CardTitle className="text-white">Welcome to Hive Mind</CardTitle>
            <CardDescription>
              Please enter your details to sign up.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-y-4">


            <div className="space-y-2">
              <Label className="text-gray-400">Email address</Label>
              <Input type="email" required />
            </div>

            <div className="space-y-2">
              <Label className="text-gray-400">Password</Label>
              <Input type="password" required />
            </div>

            <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
              or
            </p>

            <div className="grid grid-cols-2 gap-x-4">
              <Button size="sm" variant="outline" type="button">
                <Icons.gitHub className="mr-2 size-4" />
                GitHub
              </Button>
              <Button size="sm" variant="outline" type="button">
                <Icons.google className="mr-2 size-4" />
                Google
              </Button>
            </div>


          </CardContent>

          <CardFooter>
            <div className="grid w-full gap-y-4">
              <Button>Continue</Button>
              <Button variant="link" size="sm" className="text-gray-400" asChild>
                <a href="/signin" >Already have an account? Sign in</a>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export { SignUpPage };
