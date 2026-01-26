; ModuleID = 'proga_c.c'
source_filename = "proga_c.c"
target datalayout = "e-m:e-p:32:32-p10:8:8-p20:8:8-i64:64-n32:64-S128-ni:1:10:20"
target triple = "wasm32"

; Function Attrs: noinline nounwind optnone
define hidden i32 @raschet(i32 noundef %0) #0 {
  %2 = alloca i32, align 4
  store i32 %0, i32* %2, align 4
  %3 = load i32, i32* %2, align 4
  %4 = xor i32 %3, -1
  %5 = load i32, i32* %2, align 4
  %6 = shl i32 %5, 1
  %7 = xor i32 %4, %6
  %8 = load i32, i32* %2, align 4
  %9 = lshr i32 %8, 1
  %10 = xor i32 %7, %9
  ret i32 %10
}

attributes #0 = { noinline nounwind optnone "frame-pointer"="none" "min-legal-vector-width"="0" "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="generic" }

!llvm.module.flags = !{!0}
!llvm.ident = !{!1}

!0 = !{i32 1, !"wchar_size", i32 4}
!1 = !{!"Ubuntu clang version 14.0.0-1ubuntu1.1"}
