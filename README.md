# Twin Shore Stays Website

A complete static website duplicating [twinshorestays.com](https://www.twinshorestays.com), rebuilt as pure HTML/CSS/JS — no Squarespace required.

## 📁 File Structure

```
twinshorestays/
├── index.html          ← Home page
├── about.html          ← About Us
├── management.html     ← Property Management
├── book.html           ← Book Your Stay
├── contact.html        ← Contact
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Navigation, animations, forms
└── README.md
```

## 🚀 Deploy to GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub Account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a New Repository
1. Click the **+** icon → **New repository**
2. Name it: `twinshorestays` (or any name you like)
3. Set to **Public**
4. Click **Create repository**

### Step 3 — Upload Your Files
**Option A — Drag & Drop (easiest):**
1. On your new repo page, click **uploading an existing file**
2. Drag all files AND folders (`css/`, `js/`, all `.html` files) into the upload area
3. Click **Commit changes**

**Option B — GitHub Desktop App:**
1. Download [GitHub Desktop](https://desktop.github.com)
2. Clone your repo locally
3. Copy all website files into the folder
4. Commit and push

**Option C — Git Command Line:**
```bash
git clone https://github.com/YOUR_USERNAME/twinshorestays.git
# Copy all files into the cloned folder
cd twinshorestays
git add .
git commit -m "Initial website upload"
git push origin main
```

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: **main**, folder: **/ (root)**
5. Click **Save**

### Step 5 — Access Your Site
After ~60 seconds, your site will be live at:
```
https://YOUR_USERNAME.github.io/twinshorestays/
```

---

## 🌐 Custom Domain (twinshorestays.com)

To use your own domain instead of the github.io address:

1. In GitHub Pages settings → **Custom domain** → enter `twinshorestays.com` → Save
2. At your domain registrar (GoDaddy, Namecheap, etc.), add these DNS records:

**A Records** (point to GitHub):
```
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
```

**CNAME Record** (for www):
```
CNAME  www  YOUR_USERNAME.github.io
```

3. Check **Enforce HTTPS** in GitHub Pages settings (free SSL certificate!)

DNS changes take 24–48 hours to propagate fully.

---

## 📝 How to Edit Content

All content is in plain HTML — just open any `.html` file in a text editor (Notepad, VS Code, etc.) and edit the text between the tags.

### Change a review:
Find the review text inside `<p class="review-text">` and edit it.

### Add a new property (book.html):
Copy an existing `<div class="property-card">...</div>` block and update the image URL, title, specs, and booking link.

### Update contact email:
Search for `operations@twinshorestays.com` and replace across all files.

### Change colors:
Open `css/style.css` and edit the `:root` variables at the top:
```css
:root {
  --ocean: #2e6e7e;      /* Main teal color */
  --coral: #c97b5a;      /* Accent color */
  --sand: #f5f0e8;       /* Background tint */
}
```

---

## 📬 Making the Contact Form Actually Send Emails

The forms currently show a success message but don't send emails (GitHub Pages is static). To add real email sending, use one of these free services:

**[Formspree](https://formspree.io) (easiest — free tier available):**
1. Sign up at formspree.io
2. Create a form → get your form ID (e.g. `xpzgkwqr`)
3. In `contact.html` and `index.html`, add `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` to the `<form>` tag
4. Remove the JavaScript form submission code from `main.js`

---

## ✅ What's Included

- ✓ Full responsive design (mobile, tablet, desktop)
- ✓ All 5 pages (Home, About, Management, Book Your Stay, Contact)
- ✓ All original images (loaded from Squarespace CDN — see note below)
- ✓ Smooth scroll animations
- ✓ Mobile hamburger navigation
- ✓ Hero parallax effect
- ✓ Rental analysis form (home page)
- ✓ Contact form
- ✓ Real booking links (hospitable.rentals)
- ✓ Instagram link
- ✓ SEO meta tags

### ⚠️ Image Note
Images currently load from Squarespace's CDN (`images.squarespace-cdn.com`). These will continue working as long as your Squarespace account exists. For a fully independent setup, download each image and host it in an `images/` folder in your repo, then update the `src` paths in the HTML files.
