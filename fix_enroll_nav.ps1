# LSPA Fix Script — Enroll Now + Resources Cleanup
# Run from: C:\Users\johnt\Downloads\lspa-website

# ─── FIX 1: Nav.jsx — Change Enroll Now from tel: to /enroll ───
$navPath = "app\components\Nav.jsx"
$navContent = Get-Content $navPath -Raw

# Replace the tel: link on the Enroll Now button with /enroll
$navContent = $navContent -replace "href='tel:6093967171' className='ml-2 px-5 py-2 rounded-full font-bold text-sm shadow-lg'", "href='/enroll' className='ml-2 px-5 py-2 rounded-full font-bold text-sm shadow-lg'"

Set-Content $navPath $navContent -NoNewline
Write-Host "Nav.jsx updated — Enroll Now now points to /enroll" -ForegroundColor Green

# ─── FIX 2: Resources page.jsx — Remove Enrollment & Forms category ───
$resPath = "app\resources\page.jsx"
$resContent = Get-Content $resPath -Raw

# Remove the entire Enrollment & Forms object from the resources array
$oldBlock = @'
    {
        category: "Enrollment & Forms",
        icon: "📋",
        items: [
            { name: "Enrollment Application", desc: "Apply for your child's spot at LSPA", link: "#" },
            { name: "Registration Packet", desc: "Required documents for new families", link: "#" },
            { name: "Medical & Immunization Forms", desc: "Health records required for enrollment", link: "#" },
            { name: "Emergency Contact Form", desc: "Update your child's emergency information", link: "#" },
        ]
    },
'@

$resContent = $resContent.Replace($oldBlock, "")

Set-Content $resPath $resContent -NoNewline
Write-Host "Resources page.jsx updated — Enrollment & Forms section removed" -ForegroundColor Green

# ─── FIX 3: Ensure enroll directory exists ───
if (!(Test-Path "app\enroll")) {
    New-Item -ItemType Directory -Path "app\enroll" -Force | Out-Null
    Write-Host "Created app\enroll\ directory" -ForegroundColor Green
} else {
    Write-Host "app\enroll\ directory already exists" -ForegroundColor Yellow
}

# ─── FIX 4: Copy enrollment page if not already there ───
if (!(Test-Path "app\enroll\page.jsx")) {
    if (Test-Path "C:\Users\johnt\Downloads\page (1).jsx") {
        Copy-Item "C:\Users\johnt\Downloads\page (1).jsx" "app\enroll\page.jsx" -Force
        Write-Host "Enrollment page copied to app\enroll\page.jsx" -ForegroundColor Green
    } else {
        Write-Host "WARNING: Could not find 'page (1).jsx' in Downloads. Copy it manually." -ForegroundColor Red
    }
} else {
    Write-Host "app\enroll\page.jsx already exists" -ForegroundColor Yellow
}

# ─── Verify ───
Write-Host ""
Write-Host "=== VERIFICATION ===" -ForegroundColor Cyan
Write-Host "Nav.jsx size: $((Get-ChildItem $navPath).Length) bytes"
Write-Host "Resources size: $((Get-ChildItem $resPath).Length) bytes"
if (Test-Path "app\enroll\page.jsx") {
    Write-Host "Enroll page size: $((Get-ChildItem 'app\enroll\page.jsx').Length) bytes"
}
Write-Host ""
Write-Host "Done! Refresh localhost:3000 to test." -ForegroundColor Green
