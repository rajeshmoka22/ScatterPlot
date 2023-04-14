export function genericErrorMiddleware(err, req, res, next) {
  if (err) {
    res.status(500).json({ error: `Failed to process request: ${err.name} ${err.message}` });
  }
  next();
}